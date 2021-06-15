import React from 'react';
import '../../App.css';
import img_src_value from '../images/heating-cooling-system.png';

const Heating = (props) => {
    const img_text_value = "heating cooling system"

    return (
        <div className="my-content-container">
            <div>
                <h2>Heating and Cooling</h2>
                <h3>Maintaining Your System in {props.city}, {props.state_short}</h3>
                <br></br>
                <p>Fewer System Breaks Most homeowners face unexpected, stressful situations requiring quick emergency repair for their HVAC unit. Your HVAC suddenly breaking down in the middle of an equally hot summer day is certainly one of these. With an annual general maintenance policy, you greatly reduce the likelihood of your system simply breaking down while you least expect it, thus saving money in the long run. Most homeowners, however, only make the minimum monthly payments on their HVAC unit, which only helps to keep the system in good working order, but offers no guarantee that it will ever break down again. When this happens, it is often too late to take advantage of a cheaper service contract, such as a repair and maintenance package.
                </p><br></br>
                <p>HVAC Repairs Most homeowners are surprised to learn that there are actually some benefits to repairing their HVAC system instead of waiting until it breaks down. If your air quality is suffering from poor quality, your heating and cooling costs are likely suffering as well. This is because a damaged HVAC system does not work efficiently. It might even use more energy to maintain the same indoor temperature than it did before the repair began. The more worn out parts needed to repair the system, the more your home's indoor air quality degrades.
                </p><br></br>
                <p>When HVAC Is Repaired Regularly Rather than waiting until your HVAC system requires emergency repairs, do something about routine maintenance first. Many homeowners choose to save money by doing their own weekly or bi-weekly inspections, but this often proves to be inaccurate. Of course, repairing a heating system requires more care than simply changing the filter. But just changing the filters once a week or bi-weekly can significantly improve the indoor air quality of your home.
                </p><br></br>
                <p>Homeowners Often Misperceive the Importance of Proper Maintenance When homeowners choose to take on the task of repairing their HVAC, they often misperceive how important regular maintenance really is. They think that if they don't make any repairs, then the unit will last for years. The problem is that regular maintenance is just as important for a heating and cooling unit as it is for your car. Just like you need to wash your car every day, so too must you for your hvac contractor. In fact, the upkeep is even more significant than washing your car because an HVAC unit collects three times as much dust and other pollutants than a car.
                </p><br></br>
                <p>A Build-Up of Plumbing and Electrical Work A common reason that an HVAC unit breaks down is because of an excess build-up of plumbers and electrical wiring. As your air conditioning system works to cool your home, the plumbers and wiring to connect to certain areas to do their job. As the build-up of the plumbers and wiring continues, so does the risk of the unit breaking down. The most simple way to control the build-up is to regularly tighten all loose and missing plumbing connections. You can build up the plumber's build-up by cleaning out the drain screens after every flush.
                </p><br></br>
                <p>Carbon Monoxide When you are working with an HVAC system, whether it is a residential or commercial one, there is always a possibility that carbon monoxide will be present. This substance is odorless and colorless and has been found to be highly toxic. For this reason, it is extremely important that it is detected as soon as possible. Regular maintenance helps to detect any leaks or carbon monoxide spills before they turn into serious problems. Carbon monoxide has been found to significantly raise the temperature of homes that have it installed. The amount of money that it would cost to operate a home that has been built with an HVAC system that has been compromised by carbon monoxide is staggering.
                </p><br></br>
                <p>Air Conditioner Repair Just as the above example illustrates, repairing an HVAC unit can quickly become costly and problematic. However, there are some simple maintenance tips that can help to lower down the number of repairs that you need to make. For example, it is important that the air conditioner always be vented in order for it to release the hot air that it needs. If it is not vented, the cool air that is produced will condense on the ceiling of your room and stay there. This will increase the amount of time that it takes to cool your home. Taking these simple steps will help to keep your heating and cooling systems running efficiently and effectively.
                </p><br></br>
                <p>As you can see, there are many ways that your heating and cooling system can be maintained. One of the best ways to ensure that your heating and cooling systems remain comfortable year round is to maintain a good indoor air quality. By doing so, you can also help reduce your energy bills by lowering them by improving your indoor air quality. The cost of your heating and cooling may seem higher if you live in an older house or apartment, but the cost of vented indoor air conditioners is less than half of what they cost in a newer house.
                </p><br></br>
            </div>
            <div className='imageContainer'>
                <img src={img_src_value} alt={img_text_value} width="400" height="500" />
            </div>
        </div>
    )
}

export default Heating;