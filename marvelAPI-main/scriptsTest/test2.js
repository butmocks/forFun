/**
 * Ejercicio 2 (3pts) Dado los siguientes json:​
 * Se debe generar un script que con estas entradas genere el siguiente resultado:
 *  --- Los servicios para cada localidad con mayor limite. (FN: getOrderData)
 *  --- La localidad con mayor cantidad de servicios disponibles. (FN: getCityMostServices)
 *  --- El servicio con mayor cobertura (Usado en más localidades). (FN: getMoreCoverage)
 **/

// JSON
let values = {
  1: {
    carrier: "CCH",
    service: "DEX",
  },
  2: {
    carrier: "CCH",
    service: "express",
  },
  3: {
    carrier: "CCH",
    service: "priority",
  },
  15: {
    carrier: "CHP",
    service: "nextday",
  },
  16: {
    carrier: "CHP",
    service: "sameday",
  },
  17: {
    carrier: "CHP",
    service: "express",
  },
};
// JSON
let json = {
  data: {
    BUIN: [
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
    ],
    LAJA: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],

    LEBU: [
      {
        limit: 2,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      {
        limit: 6,
        over_carrier_service_id: 3,
        under_carrier_service_id: 3,
      },
      {
        limit: 5,
        over_carrier_service_id: 2,
        under_carrier_service_id: 2,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
    ],

    LOTA: [
      {
        limit: 2,
        over_carrier_service_id: 15,
        under_carrier_service_id: 15,
      },
      {
        limit: 4,
        over_carrier_service_id: 16,
        under_carrier_service_id: 16,
      },
      {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    ],
  },
};

const getOrderData = (setting, dataObj) => {
  const CITY_MOST_SERV = getCityMostServices(setting.data);
  const SERV_MOST_COVERAGE = getMoreCoverage(setting.data);

  let results = {
    city_with_most_services: CITY_MOST_SERV,
    service_with_most_coverage: SERV_MOST_COVERAGE,
  };

  Object.keys(setting.data).forEach((city) => {
    const LIMIT = Math.max(...setting.data[city].map((o) => o.limit), 0);
    const MAXVALUES = setting.data[city].find(
      (cityData) => cityData.limit === LIMIT
    );
    const OVER = MAXVALUES["over_carrier_service_id"];
    const UNDER = MAXVALUES["under_carrier_service_id"];

    results[city] = {
      limit: LIMIT,
      over: {
        carrier: dataObj[OVER]["carrier"],
        service: dataObj[OVER]["service"],
      },
      under: {
        carrier: dataObj[UNDER]["carrier"],
        service: dataObj[UNDER]["service"],
      },
    };
  });
  return results;
};
const getCityMostServices = (cities) => {
  //Get the biggest value
  const BIGGEST = Object.values(cities)
    .map((city) => city.length)
    .reduce((a, b) => Math.max(a, b));

  //Find the object with the biggest length
  const CITY_MOST_SERV = Object.keys(cities).find(
    (key) => cities[key].length === BIGGEST
  );
  return {
    city: CITY_MOST_SERV,
    total_services: BIGGEST,
  };
};
const getMoreCoverage = (arr) => {
  //convert objects values into one array
  const groupServices = Object.values(arr)
    .map((arrOn) => arrOn)
    .flat();
  let more_coverage = {};
  // Sum the times that the same id matches
  groupServices.forEach(({ over_carrier_service_id }) =>
    more_coverage[over_carrier_service_id]
      ? (more_coverage[over_carrier_service_id] += 1)
      : (more_coverage[over_carrier_service_id] = 1)
  );
  //Get higher val
  const maxValue = Object.entries(more_coverage).sort((x, y) => y[1] - x[1])[0];

  return {
    carrier: values[maxValue[0]]["carrier"],
    service: values[maxValue[0]]["service"],
    recurrency: maxValue[1],
  };
};

console.log(`
---- REQUERIMIENTOS ---
Ejercicio 2 (3pts) Dado los siguientes json: 
Se debe generar un script que con estas entradas genere el siguiente resultado:
  - Los servicios para cada localidad con mayor limite. (FN: getOrderData)
  - La localidad con mayor cantidad de servicios disponibles. (FN: getCityMostServices)
  - El servicio con mayor cobertura (Usado en más localidades). (FN: getMoreCoverage)
------------------------
`);

console.log(getOrderData(json, values));
