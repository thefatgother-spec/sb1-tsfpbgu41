import { Car } from '../types/Car';

export const mockCars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: '320i',
    year: 2020,
    price: 850000,
    mileage: 45000,
    fuelType: 'Benzin',
    transmission: 'Otomatik',
    color: 'Beyaz',
    description: 'Temiz kullanılmış, bakımlı araç. Tüm bakımları zamanında yapılmış.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Deri Döşeme', 'Sunroof', 'Navigasyon', 'Park Sensörü', 'Xenon Far'],
    isAvailable: true,
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    brand: 'Mercedes',
    model: 'C200',
    year: 2019,
    price: 920000,
    mileage: 52000,
    fuelType: 'Dizel',
    transmission: 'Otomatik',
    color: 'Siyah',
    description: 'Hasar kaydı yok, tek elden kullanılmış premium araç.',
    images: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Deri Döşeme', 'Otomatik Klima', 'Cruise Control', 'LED Far', 'Geri Görüş Kamerası'],
    isAvailable: true,
    createdAt: new Date('2024-01-10')
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'A4',
    year: 2021,
    price: 1150000,
    mileage: 28000,
    fuelType: 'Benzin',
    transmission: 'Otomatik',
    color: 'Gri',
    description: 'Az kullanılmış, garantili araç. Tüm özellikler mevcut.',
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Alcantara Döşeme', 'Sanal Kokpit', 'Matrix LED', 'Adaptif Süspansiyon'],
    isAvailable: true,
    createdAt: new Date('2024-01-20')
  },
  {
    id: '4',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2018,
    price: 520000,
    mileage: 78000,
    fuelType: 'Dizel',
    transmission: 'Manuel',
    color: 'Kırmızı',
    description: 'Ekonomik ve güvenilir araç, şehir içi kullanım için ideal.',
    images: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Klima', 'ABS', 'ESP', 'Airbag', 'Merkezi Kilit'],
    isAvailable: true,
    createdAt: new Date('2024-01-05')
  }
];