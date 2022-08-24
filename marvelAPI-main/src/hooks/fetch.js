import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  function doFetch() {
    data.value = null;
    error.value = null;
    fetch(unref(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err));
  }

  if (isRef(url)) {
    watchEffect(doFetch);
  } else {
    doFetch();
  }
  return { data, error };
}
/*
import { ref } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}

 */
/*
import { toRefs, ref, reactive } from "vue";

export function useFetch(url, options) {
  const data = ref(null);
  const state = reactive({
    error: null,
    loading: false,
  });

  const fetchData = async () => {
    state.loading = true;
    try {
      const res = await fetch(url, options);
      data.value = await res.json();
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  fetchData();

  return { data, ...toRefs(state) };
}*/
