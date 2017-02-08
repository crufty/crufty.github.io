class ListItem {
    constructor(json) {
        this.json = json;
    }

    html() {
        return `<li>
            <span>${this.json.pubdate}</span>
            <h1>${this.json.title}</h1>
            <p>${this.json.abstract}</p>
        </li>`;
    }
}

export default ListItem;