// Import the useState hook from React. This hook lets you add state to function components.
import { useState } from "react";
import '../../../public/b-icon/font/bootstrap-icons.css'

// Define a new interface for the item objects
interface Item {
    name: string;
    icon: string;  // <-- change the type of 'icon' from 'IconDefinition' to 'string'
}

// Modify the Props interface
interface Props {
    lmitems: Item[];
    heading: string;
    onSelectItem: (lmitems: string) => void;
}

function LeftMenu({ lmitems, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <div className="LeftMenu w-100">
                {lmitems.map((item, index) => {

                    return (
                        <a href={item.href} style={{textDecoration: "none"}} key={index}>
                            <div className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => { setSelectedIndex(index); onSelectItem(item.name); }}>
                                <div className="icon-container fos12 mx-2">
                                    <div>
                                        {item.name}
                                    </div>
                                    <div className='ml-1'>
                                        <i className={item.icon}></i>
                                    </div>
                                </div>
                            </div>
                        </a>
                    );
                })}
            </div>
        </>
    );
}

export default LeftMenu;
