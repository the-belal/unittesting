import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
const SignUp = () => {
    function registerUser()
    {

    }

    return (
        <div>
            <Navbar />
            <h2 className="heading">Hello PBT47</h2>
            <div style={{alignContent: 'center'}}>
                <form
                    className="signUpForm"
                    onSubmit={registerUser()}
                >
                    <div className="row">
                        <div className="form-group">
                            <label>
                                First Name<span>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <span>By creating an account, you agree with our </span>
                    <Link to="/">
                        <span>Terms & Conditions</span>
                    </Link>
                    <span> and </span>
                    <Link to="/">
                        <span>Privacy Policy</span>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUp;