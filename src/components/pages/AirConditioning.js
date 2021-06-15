import React from 'react';
import '../../App.css';
import img_src_value from '../images/air-conditioning-system.jpg'

const AirConditioning = (props) => {
    const img_text_value = "air conditioning system"

    return (
        <div className="my-content-container">
            <div>
                <h2>Air Conditioning Systems</h2>
                <h3>Tips To Keep Your Home At Peak Efficiency in {props.city}, {props.state_short}</h3>
                <br></br>
                <p>Home heating and cooling systems can require routine maintenance and repairs to ensure that they are working properly. Although most of these systems can last for many years, there are certain parts of the system that can become damaged or worn out. Knowing what to look for can help you identify these problems and address them before they cause major problems.
                </p><br></br>
                <p>How Heat Pumps Really Works Heat pumps transfer heat from air conditioner rooms to other cooler areas to provide a more comfortable temperature in all seasons. During cold months, the cooling system will transfer heat outside of the home into the house to bring the indoor temperatures back into the acceptable range. In the warmer months, however, the system transfers hot air from indoors to outdoors, bringing the indoor temperatures even further down than they were previously. This continual cycle requires that the heating and cooling system be maintained and serviced on a regular basis. A regular maintenance plan can prevent some of these problems from becoming serious and, in some cases, can make certain parts more affordable to replace.
                </p><br></br>
                <p>Regular Maintenance The way that a heating and cooling system is serviced, powered and maintained can have a large impact on its efficiency. Many parts are serviced every three months; others are serviced more frequently. To determine which parts need more attention and which may just require a simple tune-up, schedule an appointment with your local utility company. They can identify any parts that are not producing enough heat or cool air and can recommend a routine that includes both replacement and tune-up services.
                </p><br></br>
                <p>Serviceable Heating Components A good home heating and cooling system needs to be powered by a set of fully functional and long-lasting components. As the seasons change, your heating and cooling components need to change with them. A good rule of thumb is to have a minimum of two heating and cooling system components replaced annually. This ensures that your system lasts at its most efficient level for the longest amount of time possible.
                </p><br></br>
                <p>Annual Furnace Maintenance Many homeowners mistakenly believe that annual furnace inspections are not needed. While it is true that inspections don't keep you out of warranty, they do provide valuable information about the wear and tear that may be affecting your furnace's efficiency. During your inspection, a professional will check the following areas: airflow, filter, combustion chamber, burner, blower fan, condenser coils, and return air plenum. Having your furnace inspected again annually will ensure that your furnace continues to operate at peak efficiency. Your heating and cooling maintenance plan will include information on your annual furnace inspection.
                </p><br></br>
                <p>Carbon Monoxide Testing Carbon monoxide (CO) testing should be performed monthly during any phase of your heating system. Carbon monoxide is a colorless and odorless gas that affects individuals within twenty-four hours of inhalation. Symptoms of CO poisoning include flu-like symptoms including fatigue, nausea, headaches, and soreness. If you experience any of these symptoms, you should immediately call your heating company or your local fire department to report the presence of carbon monoxide in the home.
                </p><br></br>
                <p>New Heating And Cooling System Installation If your home's existing heating and cooling system are more than ten years old, it may require new installation. Installing a new system in older homes can increase your energy bill by up to thirty percent. If you choose to install a new system, your heating and cooling company will perform an inspection and offer suggestions for your home's indoor air quality. HVAC companies often recommend an HVAC professional for routine maintenance.
                </p><br></br>
                <p>Air Conditioning System Efficiency The goal of air conditioning systems is to keep your home at a comfortable temperature to make your daily life easier. Most air conditioning systems are rated on the amount of energy they use to maintain a steady temperature. Air conditioners are measured on how efficiently they cool and heat the air in your home during the hottest part of the day and winter months. By choosing a higher efficiency model, you can save money on your energy bill each month and improve your comfort level while maintaining a comfortable indoor temperature.
                </p><br></br>
            </div>
            <div className='imageContainer'>
                <img src={img_src_value} alt={img_text_value} width="400" height="300" />
            </div>
        </div>
    )
}

export default AirConditioning;