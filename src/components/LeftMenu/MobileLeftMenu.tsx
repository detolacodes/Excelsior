// Import the useState hook from React. This hook lets you add state to function components.
import { useState } from "react";

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

function MobileLeftMenu({ lmitems, heading, onSelectItem }: Props) {

    const [mobileView, setMobileView] = useState(true)
    const closeMenu = () => setMobileView(!mobileView);

    const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <>
            <div className={mobileView ? 'MobileLeftMenu zindex box-sh ml-2' : 'd-none'} >
                <div className='text-white tal-right px-2'>
                    <i className='bi-x fa-2x' onClick={closeMenu} ></i>
                </div>

                {lmitems.map((item, index) => {

                    return (
                        <a href={item.href} style={{textDecoration: "none"}} key={index}>
                            <div className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => { setSelectedIndex(index); onSelectItem(item.name); }}>
                                <div className="mob-icon-container fos13 mt-5 ml-2">
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


                <div className="ml-2 mt-5">
                  <form className="form-floating game_id w-90">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputValue"
                      placeholder="search here...."
                      defaultValue=""
                    />
                  </form>

                  <div className='text-white fos11 mt-1 ml-1'>
                    <div>
                       Balance : $230 | 2USDT
                    </div>

                    <div className=''>
                       User ID: 0057
                    </div>
                  </div>
                </div>
            </div>
        </>
    );
}

export default MobileLeftMenu;
