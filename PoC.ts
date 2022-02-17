/**
 * Create a notebook returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";
import { NotebooksApiCreateNotebookRequest } from "@datadog/datadog-api-client/dist/packages/datadog-api-client-v1";

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params: v1.NotebooksApiCreateNotebookRequest = {
  body: {
    data: {
      attributes: {
        cells: [
          {
            attributes: {
              definition: {
                requests: [
                  {
                    displayType: "line",
                    queries: [
                      {
                        query: `avg:system.load.1{*}`,
                        dataSource: "metrics",
                        name: "query1",
                      },
                      {
                        query: `avg:system.load.15{*}`,
                        dataSource: "metrics",
                        name: "query2",
                      },
                    ],
                    style: {
                      lineType: "solid",
                      lineWidth: "normal",
                      palette: "dog_classic",
                    },
                  },
                ],
                showLegend: true,
                type: "timeseries",
                yaxis: {
                  scale: "linear",
                },
              },
              graphSize: "m",
              splitBy: {
                keys: [],
                tags: [],
              },
              time: undefined,
            },
            type: "notebook_cells",
          },
        ],
        name: "Example-Create_a_notebook_returns_OK_response",
        status: "published",
        time: {
          liveSpan: "1h",
        },
      },
      type: "notebooks",
    },
  },
};

apiInstance.createNotebook(params);
// .then((data: v1.NotebookResponse) => {
//   console.log(
//     "API called successfully. Returned data: " + JSON.stringify(data)
//   );
// })
// .catch((error: any) => console.error(error));
