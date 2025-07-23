# congress_searcher

A Node.js API client for the [Sunlight Foundation Congress API](https://sunlightlabs.github.io/congress/).

### Features

- Query legislators by ZIP code or other parameters
- Simple promise-based API
- Easily extensible for other endpoints

### Installation

```sh
git clone https://github.com/dsover/congress_searcher.git
cd congress_searcher
npm install
```

### Usage

```javascript
const Legislators = require('./lib/endpoints/Legislators');

let l = new Legislators();
l.setQuery('zip=30022')
 .locate()
 .call()
 .then((data) => {
     console.log(data);
 });
 ```

 ### Configuration
 Configuration is managed via config.js. By default, it uses the Sunlight Foundation API URL. You can override settings using environment variables:

- `ENVIRONMENT` (e.g., `local`, `prod`)
- `PORT`
 
### API
#### Legislators

- `setQuery(query)`: Set the query string (e.g., `'zip=30022<vscode_annotation details='%5B%7B%22title%22%3A%22sql-injection%22%2C%22description%22%3A%22Unchecked%20input%20in%20database%20commands%20can%20alter%20intended%20queries%22%7D%5D'>'</vscode_annotation>`)
- `locate()`: Use the legislators/locate endpoint
- `call()`: Execute the API call, returns a Promise

### Development
- Node version: see `.nvmrc`
- Linting: `npm run lint` (uses ESLint, see `.eslintrc`)

### License
MIT License. See `LICENSE`.

Links
Sunlight Foundation Congress API Docs