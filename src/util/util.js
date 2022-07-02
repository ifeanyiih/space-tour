
import pageData from '../data/data.json'

const PageContent = (name) => {
    const data = pageData;
    return data[name]
}

export default PageContent