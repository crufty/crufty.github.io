import ListItem from './ListItem';

class List {
    constructor(json) {
        this.list_items = [];
        json.forEach(item => this.list_items.push(new ListItem(item)));
    }
    html() {
        return `<ul>${this.list_items.map(li => li.html()).join('\n')}</ul>`;
    }
}

export default List;