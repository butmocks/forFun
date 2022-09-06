{
  "allowed": [
    {
      "IPProtocol": "tcp",
      "ports": [
        "80"
      ]
    }
  ],
    "creationTimestamp": "2022-09-05T19:51:56.961-07:00",
      "description": "",
        "direction": "INGRESS",
          "disabled": false,
            "enableLogging": false,
              "id": "7796607079950256931",
                "kind": "compute#firewall",
                  "logConfig": {
    "enable": false
  },
  "name": "default-allow-http",
    "network": "projects/virtmachine2323/global/networks/default",
      "priority": 1000,
        "selfLink": "projects/virtmachine2323/global/firewalls/default-allow-http",
          "sourceRanges": [
            "0.0.0.0/0"
          ],
            "targetTags": [
              "http-server"
            ]
}