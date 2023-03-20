# JS2-projekt-1
# Where its @ - light
### A lite version of Where Its @ fullstack project.

Ditt uppdrag är att koda ihop en frontend till biljettjänsten *Where its @*. Den ska se ut enligt nedan mockup. Du har också tillgång till [Figma-länk](https://www.figma.com/file/vcgWPPy2q44oZZ2eORL1wB/Where-its-light?node-id=0%3A1) för exportering av assets, färger, kika fonter etc.

![screen](./screen.png)

## Tekniska krav
Du ska i denna uppgift visa att du behärskar följande tekniker i [ramverket React.js](https://reactjs.org/):

- Views & components
- States
- Methods
- Router
- useEffect
- useContext
- API
- CSS 

## Models
### Event
```json
{
"name":"Lasse-Stefanz",
"price":400,
"where":"Avicii arena",
"when":{
    "date":"21 Mar",
    "from":"20.00",
    "to":"22:00"
    }
}
```

### Order
```json
{
    "tickets" : [ <Event> ]
}
```

## API 

**BaseURL** ```https://whereitsat.zocom.workers.dev/events```
