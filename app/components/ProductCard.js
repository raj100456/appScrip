import HeartIcon from '../components/Common/Icons/HeartIcon';

export default function ProductCard({ product }) {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.title} style={{ width: '300px', height: '399px' }} />
      <div className="productName text-ellipsis">{product.title}</div>
      <div className="description">
        <span>
          Sign in or Create an account to see pricing
        </span>
        <span className="heartIcon">
          <HeartIcon/>
        </span>
      </div>
    </div>
  );
}