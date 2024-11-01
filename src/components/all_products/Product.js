import React from 'react';
import { formatCurrency } from '../../utlity/formater/formatCurrency';
import './Product.css'

const data = [
    {
        "id": 1,
        "productName": "Microwave Oven",
        "price": 32999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/9/5/n/-original-imagk8skba6ebhnz.jpeg?q=70&crop=false 1x",
        "discount": 5,
        "category": "Electronic_Oven",
        "description": "Can be used for baking along with grilling, reheating, defrosting and cooking"
    },
    {
        "id": 3,
        "productName": "Apple Smart Watch",
        "price": 42399.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/h/c/3/-original-imagte4syszvbmt2.jpeg?q=70&crop=false 1x",
        "discount": 10,
        "category": "Watch",
        "description": "Apple Watch Series 9 GPS 45mm Aluminium Case with Sport Band - S/M  (Midnight Strap, Free Size)"
    },
    {
        "id": 4,
        "productName": "Sony Blutooth Speaker",
        "price": 14700.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/s/4/6/-original-imagz6kn77uzz9t3.jpeg?q=70&crop=false 1x",
        "discount": 15,
        "category": "Speakers",
        "description": "SONY HT-S20R 5.1ch Home Theatre with Dolby Digital, Subwoofer, Rear Speakers, 400 W Bluetooth Soundbar  (Black, 5.1 Channel)"
    },
    {
        "id": 5,
        "productName": "Zebronics Zeb Blutooth Speaker",
        "price": 899.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/kingqkw0-0/speaker/mobile-tablet-speaker/k/n/q/zeb-sound-feast-50-zebronics-original-imafyefgb7xgzfhk.jpeg?q=70&crop=false 1x",
        "discount": 0,
        "category": "Speakers",
        "description": "ZEBRONICS ZEB-Sound Feast 50 / ZEB-Sound Feast 51 14 W Bluetooth Speaker  (Black, Orange, Mono Channel)"
    },
    {
        "id": 6,
        "productName": "JBL Cinema SB270 2.1",
        "price": 9999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/e/u/a/-original-imah28h33mx9ydyc.jpeg?q=70&crop=false 1x",
        "discount": 15,
        "category": "Speakers",
        "description": "Dolby digital, Wireless Subwoofer,HDMI 220 W Bluetooth Soundbar  (Black, Stereo Channel)"
    },
    {
        "id": 7,
        "productName": "boAt Stone 350 Deadpool Edition",
        "price": 1699.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/speaker/q/s/i/-original-imagtgyhynzk9vvb.jpeg?q=70&crop=false 1x",
        "discount": 5,
        "category": "Speakers",
        "description": "10 W Bluetooth Speaker  (Assassin Red, Mono Channel)10W Stereo Sound IPX7 Splash & Water Shield"
    },
    {
        "id": 8,
        "productName": "SONY BRAVIA 7 ",
        "price": 332490.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/i/7/w/-original-imah3gsb9hhwthcz.jpeg?q=70&crop=false 1x",
        "discount": 25,
        "category": "Television",
        "description": "189.3 cm (75 inch) Ultra HD (4K) Mini LED Smart Google TV 2024 Edition with Advanced AI Processor XR, Studio Calibrated, Dolby Vision Atmos  (K-75XR70)"
    },
    {
        "id": 9,
        "productName": "realme TechLife CineSonic ",
        "price": 41999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/s/0/e/-original-imah54henxrxcdhx.jpeg?q=70&crop=false 1x",
        "discount": 20,
        "category": "Television",
        "description": " Q 165 cm (65 inch) QLED Ultra HD (4K) Smart Google TV  (65UHDGQRWSGQ) Resolution: Ultra HD (4K) 3840 X2160 Pixels"
    },
    {
        "id": 10,
        "productName": "Hisense Q6N  ",
        "price": 59999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/y/1/q/-original-imah4qt54hy7deaz.jpeg?q=70&crop=false 1x",
        "discount": 15,
        "category": "Television",
        "description": " 164 cm (65 inch) QLED Ultra HD (4K) Smart Google TV Dolby Vision Atmos Far Field Voice Control Smooth Motion Rate  (65Q6N)"
    },
    {
        "id": 11,
        "productName": "MOTOROLA EnvisionX",
        "price": 22999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/i/5/1/-original-imahygg2gkbfqknn.jpeg?q=70&crop=false 1x",
        "discount": 5,
        "category": "Television",
        "description": " 108 cm (43 inch) QLED Ultra HD (4K) Smart Google TV with Dolby Vision & Dolby Atmos  (43UHDGQMWSTQ)"
    },
    {
        "id": 12,
        "productName": "Mi by Xiaomi X Series ",
        "price": 31990.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/m/k/l55m8-a2in-mi-original-imah2pggzz6g8teu.jpeg?q=70&crop=false 1x",
        "discount": 5,
        "category": "Television",
        "description": " 138 cm (55 inch) Ultra HD (4K) LED Smart Google TV with 4K Dolby Vision | HDR 10 | Dolby Audio |,DTS X | DTS Virtual: X | Vivid Picture Engine"
    },
    {
        "id": 14,
        "productName": "SAMSUNG New D Series Brighter Crystal 4K Vision Pro (2024 Edition)  ",
        "price": 28990.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/u/v/o/-original-imah2v2gamua43wz.jpeg?q=70&crop=false 1x",
        "discount": 10,
        "category": "Television",
        "description": " 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV with 4K Upscaling | 300+ Free Channels | Multiple Voice Assistance Remote | Purcolor | HDR 10+ | Auto Game Mode | Q-Symphony | Knox Security  (UA43DUE76AKLXL)"
    },
    {
        "id": 15,
        "productName": "LG UR7500",
        "price": 42990.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/television/u/s/s/-original-imah5ykhqwfybqft.jpeg?q=70&crop=false 1x",
        "discount": 15,
        "category": "Television",
        "description": " 139 cm (55 inch) Ultra HD (4K) LED Smart WebOS TV with Alpha5 AI Processor 4K Gen6, AI Picture Pro, 4K Upscaling, 60 Hz Refresh Rate, Game Optimizer, Magic Remote Capability, 5-Year Guaranteed with New OS Experience  (55UR7500PSC)"
    },
    {
        "id": 16,
        "productName": "SAMSUNG 8 kg Fully Automatic Front Load Washing Machine ",
        "price": 36490.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/j/a/y/-original-imah47qufjqaagu5.jpeg?q=70&crop=false 1x",
        "discount": 15,
        "category": "Washing Machine",
        "description": " Fully Automatic Front Load Washing Machines have Great Wash Quality with very less running cost 1400 rpm : Higher the spin speed, lower the drying time 8 kg"
    },
    {
        "id": 17,
        "productName": "LG 9 kg  ",
        "price": 39990.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/q/w/x/-original-imagx7qhyuxgsmfy.jpeg?q=70&crop=false 1x",
        "discount": 20,
        "category": "Washing Machine",
        "description": "5 Star with AI Direct Drive, 6 Motion, Inverter Direct Drive, Steam and Wi-Fi Enabled Fully Automatic Front Load Washing Machine with In-built Heater Black  (FHP1209Z5M)"
    },
    {
        "id": 18,
        "productName": "MarQ",
        "price": 7190.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/7/i/j/-original-imahf5wfgzgrhdvw.jpeg?q=70&crop=false 1x",
        "discount": 5,
        "category": "Washing Machine",
        "description": "Semi Automatic Top Load 1350 rpm : Higher the spin speed, lower the drying time 7 kg"
    },
    {
        "id": 19,
        "productName": "Voltas 1.5 Ton 3 Star Split Inverter AC",
        "price": 33990.0,
        "imageUrl": " https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/h/j/v/-original-imah4gsy6yfmrum9.jpeg?q=70&crop=false 1x",
        "discount": 20,
        "category": "Air Conditioner",
        "description": "Energy efficient, best in class cooling with easy maintenance.No need to manually reset the settings post power-cut   Auto-adjusts the temperature to ensure comfort during your sleep"
    },
    {
        "id": 20,
        "productName": "Panasonic 7 Inverter AC",
        "price": 35490.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/s/2/y/-original-imagxghbga5x5gzw.jpeg?q=70&crop=false 1x",
        "discount": 25,
        "category": "Air Conditioner",
        "description": " 1.5 Ton No need to manually reset the settings post power-cut Energy efficient, best in class cooling with easy maintenance."
    },
    {
        "id": 21,
        "productName": "Hitachi 1.5 Ton 3 Star Window AC - White ",
        "price": 29890.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/kn7sdjk0/air-conditioner-new/k/o/4/raw518hedo-window-hitachi-fixed-speed-original-imagfy3cmnm7m4wg.jpeg?q=70&crop=false 1x",
        "discount": 15,
        "category": "Air Conditioner",
        "description": "1.5 Ton Auto Restart: No need to manually reset the settings post power-cut Copper : Energy efficient, best in class cooling with easy maintenance."
    },
    {
        "id": 22,
        "productName": "Lloyd 2023 Model 1 Ton 2 Star Window AC - White  ",
        "price": 25390.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/o/x/o/-original-imagmncz8jfwdafb.jpeg?q=70&crop=false 1x",
        "discount": 36,
        "category": "Air Conditioner",
        "description": "1 Ton Auto Restart: No need to manually reset the settings post power-cut Copper : Energy efficient, best in class cooling with easy maintenance.Sleep Mode: Auto-adjusts the temperature to ensure comfort during your sleep"
    },
    {
        "id": 23,
        "productName": "SAMSUNG 183 L Direct Cool Single Door Refrigerator ",
        "price": 16990.0,
        "imageUrl": " https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/t/m/9/-original-imah4c6pbhvgerzn.jpeg?q=70&crop=false 1x",
        "discount": 26,
        "category": "Refrigerator",
        "description": "Base Drawer with Digital Inverter Direct Cool : Economical, consumes less electricity, requires manual defrosting Base Stand with Drawer : For storing items that don't need cooling (Onion, Potato etc.)"
    },
    {
        "id": 24,
        "productName": "LG 185 L Direct Cool Single Door Refrigerator ",
        "price": 15990.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/m/x/0/-original-imah2d8dqfagz47p.jpeg?q=70&crop=false 1x",
        "discount": 26,
        "category": "Refrigerator",
        "description": "Smart Inverter Compressor Direct Cool : Economical, consumes less electricity, requires manual defrosting For storing items that don't need cooling"
    },
    {
        "id": 25,
        "productName": "Whirlpool 184 L Direct Cool Single Door 2 Star Refrigerator ",
        "price": 11990.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/0/g/c/-original-imagpw45rfzvyrqq.jpeg?q=70&crop=false 1x",
        "discount": 22,
        "category": "Refrigerator",
        "description": "Economical, consumes less electricity, requires manual defrosting 184 L : Good for couples and small families"
    },
    {
        "id": 26,
        "productName": "Motorola G85 5G (Olive Green, 128 GB)  (8 GB RAM)",
        "price": 16999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70&crop=false 1x",
        "discount": null,
        "category": "MObiles",
        "description": "8 GB RAM | 128 GB ROM.16.94 cm (6.67 inch) Full HD+ Display.50MP + 8MP | 32MP Front Camera.5000 mAh Battery 6s Gen 3 Processor."
    },
    {
        "id": 27,
        "productName": "Motorola Edge 50 Fusion (Forest Green, 128 GB)  (8 GB RAM)",
        "price": 20999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/l/q/-original-imah4k2srpwzpgpa.jpeg?q=70&crop=false 1x",
        "discount": null,
        "category": "MObiles",
        "description": "8 GB RAM | 128 GB ROM.17.02 cm (6.7 inch) Full HD+ Display.50MP + 13MP | 50MP Front Camera.5000 mAh Battery 7s Gen 3 Processor."
    },
    {
        "id": 28,
        "productName": "CMF by Nothing Phone 1 (Light Green, 128 GB)  (8 GB RAM)",
        "price": 15999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/o/2/-original-imah3ajbyffs6hee.jpeg?q=70&crop=false 1x",
        "discount": 5,
        "category": "Mobiles",
        "description": "8 GB RAM | 128 GB ROM | Expandable Upto 2 TB.16.94 cm (6.67 inch) Full HD+ Display.50MP + 2MP | 50MP Front Camera.5000 mAh Battery 5G Processor."
    },
    {
        "id": 29,
        "productName": "SAMSUNG Galaxy A14 5G (Black, 128 GB)  (6 GB RAM)",
        "price": 10999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/2/o/-original-imah4sss2hjckcdk.jpeg?q=70&crop=false 1x",
        "discount": 47,
        "category": "Mobiles",
        "description": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB.16.76 cm (6.6 inch) Full HD+ Display.50MP + 2MP + 2MP | 13MP Front Camera.5000 mAh Lithium Ion Battery."
    },
    {
        "id": 30,
        "productName": "SAMSUNG Galaxy A14 5G (Black, 128 GB)  (6 GB RAM)",
        "price": 10999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/e/g/-original-imah4sssfvvahchb.jpeg?q=70",
        "discount": 47,
        "category": "Mobiles",
        "description": "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB.16.76 cm (6.6 inch) Full HD+ Display.50MP + 2MP + 2MP | 13MP Front Camera.5000 mAh Lithium Ion Battery."
    },
    {
        "id": 31,
        "productName": "realme P1 5G (Phoenix Red, 128 GB)  (8 GB RAM)",
        "price": 14999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70&crop=false 1x",
        "discount": 31,
        "category": "Mobiles",
        "description": "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB.16.94 cm (6.67 inch) Full HD+ Display.50MP + 2MP + 16MP | 13MP Front Camera.5000 mAh Lithium Ion Battery .Dimensity 7050 Processor."
    },
    {
        "id": 31,
        "productName": "Apple iPhone 16 (Black, 128 GB)",
        "price": 79999.0,
        "imageUrl": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/w/5/-original-imah4jyfwr3bfjbg.jpeg?q=70",
        "discount": 31,
        "category": "Mobiles",
        "description": "8 GB RAM | 128 GB ROM | Expandable Upto 1 TB.16.94 cm (6.67 inch) Full HD+ Display.50MP + 2MP + 16MP | 13MP Front Camera.5000 mAh Lithium Ion Battery .Dimensity 7050 Processor."
    }
];

const rightArrow = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: "brown", fontSize: "25px" }} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
)

const Product = () => {

    const uniqueCategories = data.reduce((acc, item) => {
        // Check if the category already exists in the accumulator
        if (!acc.some((i) => i.category === item.category)) {
          acc.push(item); // Add the item if the category is not yet included
        }
        return acc;
      }, []);
      
    console.log(JSON.stringify(uniqueCategories))

    return (
        <div>
            <div className='flex justify-end relative right-[60px]'>
                <button >{rightArrow}</button>
            </div>
            <div>
                <img src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?t=st=1730310734~exp=1730314334~hmac=82b84d1159d6ad24d1f5a270723bce1a25d4278c252b02255435ea979a205f07&w=1380" alt="" className='banner'/>
            </div>
              <div className="product-grid-container">
              {uniqueCategories.map((item) => (
                <div key={item.id} className="product-card">
                <img
                  src={item.imageUrl}
                  alt="product"
                  className="product-image"
                />
                <div className="product-category">
                  <h5>{item.category}</h5>
                </div>
                <div className="product-details">
                  <h5 className="product-price">₹ {formatCurrency(item.price)}/-</h5>
                  <h5 className="product-name">{item.productName}</h5>
                  <button className="product-button">More</button>
                </div>
              </div>
    
                 ))}
            </div>
            <img src="https://as1.ftcdn.net/v2/jpg/04/75/43/76/1000_F_475437615_9wyPgTteuaIXREeq3RFqu9Qae1sHB3lI.jpg" alt=""  className='banner'/>

        </div>
    )
}

export default Product
