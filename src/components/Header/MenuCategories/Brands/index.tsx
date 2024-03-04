import BrandImage1 from '../../../../assets/BrandsImages/Architecture.png';
import BrandImage2 from '../../../../assets/BrandsImages/City.png';
import BrandImage3 from '../../../../assets/BrandsImages/Creator.png';
import BrandImage4 from '../../../../assets/BrandsImages/Dots.png';
import BrandImage5 from '../../../../assets/BrandsImages/Duplo.png';
import BrandImage6 from '../../../../assets/BrandsImages/Friends.png';
import BrandImage7 from '../../../../assets/BrandsImages/Ideas.png';
import BrandImage8 from '../../../../assets/BrandsImages/MiniFigures.png';
import BrandImage9 from '../../../../assets/BrandsImages/Technic.png';

const Brands = () => {
  const mockBrands = [
    { src: BrandImage1, alt: 'Architecture' },
    { src: BrandImage2, alt: 'City' },
    { src: BrandImage3, alt: 'Creator' },
    { src: BrandImage4, alt: 'Dots' },
    { src: BrandImage5, alt: 'Duplo' },
    { src: BrandImage6, alt: 'Friends' },
    { src: BrandImage7, alt: 'Ideas' },
    { src: BrandImage8, alt: 'MiniFigures' },
    { src: BrandImage9, alt: 'Technic' },
  ];

  return (
    <div className="brands">
      {mockBrands.map((brand, index) => (
        <div key={index} className="brand-container">
          <div key={index} className="brand">
            <img src={brand.src} alt={brand.alt} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Brands;