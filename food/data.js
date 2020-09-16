const data = [
    {
        id:1,
        name:'ข้าวมันไก่ไหหลำนายจิว - ถนนดินสอ',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%84%E0%B8%AB%E0%B8%AB%E0%B8%A5%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%88%E0%B8%B4%E0%B8%A7-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%AD-delivery/3-CZE1VN5KVEVEGX',
        type:'Partner, Cooked to Order'
    },
    {
        id:2,
        name:'ไก่ไม่ยอมนอน - ซอยรามบุตรี',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B9%84%E0%B8%81%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A2%E0%B8%AD%E0%B8%A1%E0%B8%99%E0%B8%AD%E0%B8%99-%E0%B8%8B%E0%B8%AD%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%9A%E0%B8%B8%E0%B8%95%E0%B8%A3%E0%B8%B5-delivery/3-CZLDNAATVA2UNJ',
        type:'Coupon, Partner, Rice Bowls'
    },
    {
        id:3,
        name:'อ้อย ข้าวคลุกกะปิ - อรุณ​อัม​รินทร์',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%A2-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%84%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B8%81%E0%B8%B0%E0%B8%9B%E0%B8%B4-%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E2%80%8B%E0%B8%AD%E0%B8%B1%E0%B8%A1%E2%80%8B%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-delivery/3-CZKTN2TYCTCEFA',
        type:'Partner, Cooked to Order'
    },
    {
        id:4,
        name:'ข้าวหมูทอด krit - ถนนศิริพงษ์',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B8%97%E0%B8%AD%E0%B8%94-krit-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C-delivery/3-CZKZN8MVEUTJEA',
        type:'Partner, Rice Bowls'
    },
    {
        id:5,
        name:'บุงกี่ เป็ดย่างฮ่องกง - บางลำพู',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%9A%E0%B8%B8%E0%B8%87%E0%B8%81%E0%B8%B5%E0%B9%88-%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%AE%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%87-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9-delivery/3-CY4CJ2WAKAAZFE',
        type:'Coupon, Partner, Chinese'
    },
    {
        id:6,
        name:'น้ำปั่นและอาหารตามสั่ง - วังหลัง',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%9B%E0%B8%B1%E0%B9%88%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87-%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-delivery/3-CZDZFAK1A7JYCA',
        type:'Coupon, Partner, Cooked to Order'
    },
    {
        id:7,
        name:'ลุงน้อยโภชนา - สวนอ้อย',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%82%E0%B8%A0%E0%B8%8A%E0%B8%99%E0%B8%B2-%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%A2-delivery/THGFIST000005yf',
        type:'Coupon, Partner, Cooked to Order, Esan'
    },
    {
        id:8,
        name:'จิวโจ๊กบางลำพู สุกี้กะทะร้อน - ถนนตานี',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%88%E0%B8%B4%E0%B8%A7%E0%B9%82%E0%B8%88%E0%B9%8A%E0%B8%81%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A5%E0%B8%B3%E0%B8%9E%E0%B8%B9-%E0%B8%AA%E0%B8%B8%E0%B8%81%E0%B8%B5%E0%B9%89%E0%B8%81%E0%B8%B0%E0%B8%97%E0%B8%B0%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%99-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%95%E0%B8%B2%E0%B8%99%E0%B8%B5-delivery/THGFIST000001zo',
        type:'Partner, Noodles'
    },
    {
        id:9,
        name:'รสนิยม (Rosniyom) - ท่าเรือมหาราช',
        imageURL:'https://food.grab.com/th/en/restaurant/%E0%B8%A3%E0%B8%AA%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1-rosniyom-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A-delivery/THGFIST00000236',
        type:'Coupon, Partner, Noodles'
    }
    ];
        module.exports = data;