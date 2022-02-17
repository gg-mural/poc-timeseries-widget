## Run

```
npm i
DD_APP_KEY="your-app-key" DD_API_KEY="your-api-key" npx ts-node PoC.ts
```

## Result:

```
code: 400,
  body: APIErrorResponse {
    errors: [
      `API input validation failed: {'cells': {0: {'errors': [{'source': {'pointer': '/data/attributes/definition'}, 'detail': "{'style': {'line_width': 'normal', 'palette': 'dog_classic'
, 'line_type': 'solid'}, 'display_type': 'line', 'queries': [{'query': 'avg:system.load.1{*}', 'data_source': 'metrics', 'name': 'query1'}, {'query': 'avg:system.load.15{*}', 'data_source
': 'metrics', 'name': 'query2'}]} is not valid under any of the given schemas\\n\\nFailed validating 'oneOf' in schema['properties']['requests']['items']:\\n    {'additionalProperties': F
alse,\\n     'oneOf': [{'required': ['q']},\\n               {'required': ['event_query']},\\n               {'required': ['legacy_event_query']},\\n               {'required': ['apm_quer
y']},\\n               {'required': ['log_query']},\\n               {'required': ['network_query']},\\n
```

This seems to work fine with curl and using a json input, the reference docs also seem to match, but it doesn't work...

https://docs.datadoghq.com/dashboards/widgets/timeseries/#pagetitle
