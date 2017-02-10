class ListItem {
    constructor(json) {
        this.json = json;
    }

    html() {
        return `<li>
            <span class='published-date'>Published: ${this.json.pubdate}</span>
            <h1 class='display-1'>${this.json.title}</h1>
            <p class='lead'>${this.json.abstract}</p>
        </li>`;
    }
}

export default ListItem;
