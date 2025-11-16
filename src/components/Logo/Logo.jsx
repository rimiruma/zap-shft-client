import logo from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={logo} alt="" />
            <h3 className='text-3xl font-bold text-black -ms-2.5'>ZapShift</h3>
        </div>
    );
};

export default Logo;