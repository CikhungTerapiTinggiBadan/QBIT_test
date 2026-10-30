type iFruit = {
    fruitId: number,
    fruitName: string;
    fruitType: "IMPORT" | "LOCAL";
    stock: number
}

const fruits: iFruit[] = [
    {
        fruitId:1,
        fruitName:"Apel",
        fruitType: "IMPORT",
        stock: 20
    },
    {
        fruitId:2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId:3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]

function Name(data: iFruit[]) {
    const fruitnames = data.map(fruit => fruit.fruitName);
    return {
        Buah_yang_dimiliki_Andi: fruitnames,
    };
};

function Container(data: iFruit[]) {
    const containers: Record<string, string[]> = {};

    data.forEach(fruit => {
        if (!containers[fruit.fruitType]) {
            containers[fruit.fruitType] = []
        }
        if (!containers[fruit.fruitType].includes(fruit.fruitName.toLowerCase())) {
            containers[fruit.fruitType].push(fruit.fruitName.toLowerCase());
        }

    });

    return {
        Wadah_yang_dibutuhkan: Object.keys(containers).length,
        Buah_masing_masing_wadah: containers
    };
}

function StockContainer(data: iFruit[]) {
    const stocks: Record<string, number> = {};

    data.forEach(fruit => {
        if (!stocks[fruit.fruitType]) {
            stocks[fruit.fruitType] = 0;
        }
        stocks[fruit.fruitType] += fruit.stock;
    })
    return stocks;
}

console.log("1. ",Name(fruits));
console.log("2. ", Container(fruits));
console.log("3. ", StockContainer(fruits));
console.log("4. Terdapat kesalahan pada data di fruitName dan fruitID. Pada fruitName terdapat penulisan kapitalisasi data yang tidak konsisten, yaitu [Apel, apel, Kurma, KURMA]. Hal ini dapat dihindari dengan melakukan normalisasi data menggunakan .toLowerCase atau .toUperCase pada saat proses validasi data sebelum disimpan. Pada fruitID terdapat duplikasi data dimana nilai 5 digunakan berulang. Primary Key harus bersifat unik dan digunakan untuk membedakan dengan data lainnya. Hal ini dapat dicegah dengan cara menerapkan UUID di sisi database dan tidak menambahkan opsi input ID secara manual.")