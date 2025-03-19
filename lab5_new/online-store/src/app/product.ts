export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    likes: number;
    link: string; 
    category: string;
  }
  export const products: Product[]   = [
    {
        id:1,
        name: 'Смартфон Apple iPhone 13 128Gb черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
        likes:0,
        category:"Best Smartphones"
      },
      {
        id:2,
        name: 'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        likes:0,
        category:"Best Smartphones"
      },
      {
        id:3,
        name: 'Смартфон Samsung Galaxy A02 2/32GB черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a02-2-32gb-chernyi-101040270/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        likes:0,
        category:"Best Smartphones"
      },
      {
        id:4,
        name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium',
        likes:0,
        category:"Best Smartphones"
      },
      {
        id:5,
        name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/h74/64487156645918.jpg?format=gallery-medium',
        likes:0,
        category:"Best Smartphones"
      },
      {
        id:6,
        name: 'Смартфон Samsung Galaxy A03s 3 ГБ/32 ГБ черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03s-3-gb-32-gb-chernyi-102171993/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h27/64089321406494.jpg?format=gallery-medium',
        likes:0,
        category:"Good Smartphones"
      },
      {
        id:7,
        name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/',
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
        likes:0,
        category:"Good Smartphones"
    
      },
      {
        id:8,
        name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium',
        likes:0,
        category:"Good Smartphones"
              },
        
      {
        id:9,
        name: 'Смартфон Apple iPhone 14 128Gb черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
        likes:0,
        category:"Good Smartphones"
      
      },
      {
        id:10,
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
        description: 'A large phone with one of the best screens',
        rating: 9.1,
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        likes:0,
        category:"Good Smartphones"},
        { id:11,category:"Home Appliances",name: 'Vacuum Cleaner', description: 'Cordless vacuum cleaner', rating: 4.6, image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h73/86157341294622.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/dyson-v15s-detect-submarine-serebristyi-114424216/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjwp8--BhBREiwAj7og16b3xQYVIQoebnosoSluzGoku-9RtwmfbwuLgQiTGif7RycosP701xoCrhMQAvD_BwE',likes:0, },
        { id:12,category:"Home Appliances", name: 'Microwave', description: 'Powerful microwave', rating: 4.5, image: 'src="https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium"', link: 'https://kaspi.kz/shop/p/ava-mmwo-2070b-chernyi-117793364/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjwp8--BhBREiwAj7og16b3xQYVIQoebnosoSluzGoku-9RtwmfbwuLgQiTGif7RycosP701xoCrhMQAvD_BwE',likes:0, },
        { id:13,category:"Home Appliances", name: 'Air Fryer', description: 'Healthy cooking air fryer', rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/he0/86903079829534.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/elektrogril-silver-crest-extra-large-capacity-air-fryer-122737343/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjwp8--BhBREiwAj7og16b3xQYVIQoebnosoSluzGoku-9RtwmfbwuLgQiTGif7RycosP701xoCrhMQAvD_BwE',likes:0, },
        { id:14,category:"Home Appliances", name: 'Blender', description: 'High-speed blender', rating: 4.4, image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha1/67141660606494.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/slaouwo-hb-2075-chernyi-108151055/?c=750000000',likes:0, },
        { id:15,category:"Home Appliances", name: 'Refrigerator', description: 'Energy-efficient refrigerator', rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/haf/63759042183198.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/indesit-ds-4180-w-belyi-2701650/?c=750000000',likes:0, },
        { id:16,category:"Books", name: 'Atomic Habits', description: 'Self-improvement book', rating: 4.9, image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',likes:0, link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000', },
        { id:17,category:"Books", name: '1984', description: 'Classic dystopian novel', rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/pad/p70/27751831.jpeg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/oruell-d-kniga-oruell-d-1984-135603618/?c=750000000',likes:0, },
        { id:18,category:"Books", name: 'Sapiens', description: 'History of humankind', rating: 4.7, image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h6b/63972604084254.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/harari-ju-n-sapiens-kratkaja-istorija-chelovechestva-101053855/?c=750000000',likes:0, },
        { id:19,category:"Books", name: 'Rich Dad Poor Dad', description: 'Personal finance book', rating: 4.6, image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h66/86499723509790.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/kiiosaki-r-bogatyi-papa-bednyi-papa-dlja-podrostkov-100003438/?c=750000000',likes:0, },
        { id:20,category:"Books", name: 'The Alchemist', description: 'Inspiring novel', rating: 4.8, image: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hc3/63784541028382.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/koel-o-p-alhimik-26007988/?c=750000000',likes:100, },
      

    
  ]