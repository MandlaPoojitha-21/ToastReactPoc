import { joinrestaurantcustomdata} from '../../khoros-variables/khoros-variables.js';

const JoinRestaurant = () => {
   
    return (
        <div className='joinrestaurantroot-container'> 
            <h2>Join a restaurant group</h2>
            <div className="groups">
                {joinrestaurantcustomdata.joinarestaurantdata.map((group, index) => (
                    <a key={index} href={group.link} className="group-link">
                        {group.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default JoinRestaurant;
