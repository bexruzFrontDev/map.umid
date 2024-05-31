const api = {
  success: true,
  message: '',
  data: [
    {
      id: 485,
      name: 'LOWE',
      price: 350000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//3Lfti9S4U0QnrpPX5w7zeIUmZjT3EgMv2iIfYg79.jpg',
    },
    {
      id: 307,
      name: 'Бомбер от Essentials',
      price: 790000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//kVMciZM3qLPwrr6O2Hgq3sNYbPCoHgyhqYm4eDCl.jpg',
    },
    {
      id: 310,
      name: 'Nike',
      price: 720000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//wIVn5U7mVVFMnWD8L20XWfpWfVG2fO8bJFByHRLV.jpg',
    },
    {
      id: 563,
      name: 'DIOR',
      price: 390000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//9UeF0ya8IkCNgO3MtappFIAvvOV5iauffNk8B2Uc.jpg',
    },
    {
      id: 289,
      name: 'Футболка',
      price: 350000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//rX72Iun8bOpAIqiNuSqDnoO7MiQb2kI6PWRXiK4C.jpg',
    },
    {
      id: 263,
      name: 'Худи',
      price: 590000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//pb8daL1LPLt9sHKtMV7coeb6hOPPotzZI6R7AUtv.jpg',
    },
    {
      id: 386,
      name: 'BURBERRY',
      price: 350000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//eje3UQwXjFthdklcNUgF5AFikaXOfXnyvBomfvie.jpg',
    },
    {
      id: 370,
      name: 'BURBERRY',
      price: 350000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//hRrV5TMSAKi3OQIkmxwjQqxz0lEIaJCmvbreDYse.jpg',
    },
    {
      id: 423,
      name: 'ОВЕРСАЙЗ ФУТБОЛКА',
      price: 490000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//mvxcTf2jzcuIX3FTSq3VqYenU9icJXX5g750Qgdx.jpg',
    },
    {
      id: 445,
      name: 'BALMAIN UNICORN',
      price: 1500000,
      discount: 0,
      image:
        'https://www.alibimenstyle.uz/storage/products//MpBgXzQNrBjZ43kBcBqSmYe0o5jzsYmXNqHGSneZ.jpg',
    },
  ],
  code: 200,
  meta: {
    count: 10,
    currentPage: 1,
    previousPageUrl: null,
    nextPageUrl: 'https://www.alibimenstyle.uz/api/products?page=2',
    total: 346,
    perPage: 10,
    lastPage: 35,
  },
};
let main = document.querySelector('.main');

function htmlga() {
  let html = '';
  api.data.map((el) => {
    html += `
        <div class= "card">
        <img src=${el.image} />
        <h2>${el.name}</h2>
        <p>${el.price}</p>
        <b>${el.discount}</b>
        </div>
        `;
    main.innerHTML = html;
  });
}
htmlga();
