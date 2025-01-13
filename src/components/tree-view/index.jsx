import './styles.css';
import MenuList from './menu-list.jsx'
import menus from './data.js'


export default function TreeView() {


    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    )
}