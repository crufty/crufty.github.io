class ListItem {
    constructor(json) {
        this.json = json;
    }

    html() {
        return `<li>
            <span class='published-date'>Published: ${this.json.pubdate}</span>
            <h1 class='title'>${this.json.title}</h1>
            <p class='abstract'>${this.json.abstract}</p>
        </li>`;
    }
}

export default ListItem;