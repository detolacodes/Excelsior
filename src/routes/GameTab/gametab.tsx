import Layout from "../Layout";
import unavailable from "../../assets/crb6.png";

const GameTab = () =>{


    return(
        <Layout>
            <div className='col-lg-12 my-2 flex-h-new'>
                <img src={unavailable} width='70%' />
                <div className='fos20 text-white'>
                    COMING SOON
                </div>
            </div>
        </Layout>
    )

}

export default GameTab