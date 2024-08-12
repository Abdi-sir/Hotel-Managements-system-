import Logos from '../data/img/logo-light.png'

function Logo() {
  return (
    <div className="items-center">
      <img className="h-36 w-auto"  src={Logos} alt="Logo" />
    </div>
  );
}

export default Logo;
