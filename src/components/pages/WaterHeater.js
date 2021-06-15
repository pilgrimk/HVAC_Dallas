import React from 'react';
import '../../App.css';
import img_src_value from '../images/water-heater-system.jpg';

const WaterHeater = (props) => {
    const img_text_value = "water heater"

    return (
        <div className="my-content-container">
            <div>
                <h2>Water Heater Replacement</h2>
                <h3>Discover The Benefits From Regular Maintenance in {props.city}, {props.state_short}</h3>
                <br></br>
                <p>Have you ever replaced your water heater? If not, it is probably time to replace your old unit. There are numerous benefits to having a new water heater, maintenance is just as important as replacement. Here are just some of them:
                </p><br></br>
                <p>- Maintenance: Every water heater needs to be serviced at least once every year. In Florida, where we live, hard water causes hard water build up which takes extra pressure off the anode rod. The pressure on the rod causes the flow of water to slow down, sometimes stopping completely. Annual flushing of the hot water heater is necessary to prevent blockages and to keep the flow moving.
                </p><br></br>
                <p>- Energy Costs: Water heaters have high energy costs. Replacement can reduce the energy costs associated with the hot water heater. It also extends the life of the system by preventing wear and tear. When the anode valve is replaced, the flow of water through the system is allowed to resume its normal speed. As a result, the pressure of the incoming water drops. This reduces the energy cost for operating the heater.
                </p><br></br>
                <p>- Replacement Cost: Replacement is typically much less than replacement of the entire water heater. For this reason, it adds considerably to the net value of the home improvement project. Even a simple upgrade can bring a substantial increase in the resale value of a home. Even more important to many homeowners is the ability to enjoy these benefits even when energy prices are high. With both of these benefits, the additional investment in your hot water heater becomes an excellent investment.
                </p><br></br>
                <p>- Plumbing: When a plumbing system is not maintained it experiences several problems. In addition to the deterioration of pipe material and effectiveness of the valves, it can result in water damage that requires extensive repairs. If plumbers do not maintain the plumbing properly, the homeowner may need to replace the entire plumbing system. This can be extremely costly and inconvenient. Therefore, proper hot water heater maintenance can help to avoid replacement.
                </p><br></br>
                <p>- Relief Valve Repair: When the water heater does not function properly, it often results in loss of heat. The homeowner may then need to repair or replace the relief valve. Replacement can sometimes reduce the efficiency of the unit. In this situation, both the plumber and the homeowner gain.
                </p><br></br>
                <p>These are only a few of the benefits gained from efficient water heater maintenance. A simple upgrade to the system can make a significant difference to the overall efficiency of the system. This will result in better usage, higher efficiency, and the ability to reap several other benefits, such as improved energy costs and reduced household budgets.
                </p><br></br>
                <p>Water heaters are a popular choice in homes. They offer excellent heat production and immediate relief when needed. However, proper maintenance helps to ensure that they provide reliable heating for many years. When problems occur, homeowners have several options for repairing their units. Hot water heater maintenance helps to ensure they work efficiently and contribute to energy savings.
                </p><br></br>
                <p>When a homeowner installs a new heating system, he should consider a hot water heater maintenance plan. When the proper maintenance is completed, he can expect his system to work efficiently for several years. When problems arise, repairs can be performed easily and inexpensively.
                </p><br></br>
                <p>There are a number of benefits from regular maintenance. Homeowners can expect longer life from their equipment because problems are prevented before they become too costly. When there are problems, they can usually be repaired without calling on professional services. When homeowners take some time to perform simple maintenance on their heater replacement, they can expect their unit to work properly. They can also save money by avoiding professional heating repair costs.
                </p><br></br>
                <p>If you are looking for hot water heater replacement, don't delay. Taking the proper time to perform the necessary maintenance on your unit can help you reap many of the benefits from performing maintenance regularly. These benefits include saving money, preventing costly repairs, and knowing how to properly care for your new appliance. Find out some benefits from regular maintenance so that you can be more aware of what you can expect.
                </p><br></br>
                <p>Your heater may need some maintenance after it has been replaced. Check with the manufacturer or authorized service center to determine when the correct replacement valve should be added. You will soon see the difference in efficiency and cost when you are able to use your new, less-costly, gas water heater
                </p><br></br>
            </div>
            <div className='imageContainer'>
                <img src={img_src_value} alt={img_text_value} width="400" height="500" />
            </div>
        </div>
    )
}

export default WaterHeater;