import TechSupport from '../../assets/TechSupport.jpg';
export const styles = {
        chatWithMeButton: {
                position: 'fixed',
                bottom: '30px',
                right: '50px',
                cursor: 'pointer',
                boxShadow: '0px 0px 38px RGBA(0,0,0,0.2)',
                // Border
                zIndex: '10000',
                borderRadius: '50%',
                // Background 
                backgroundImage: `url(${TechSupport})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: ' center',
                backgroundSize: '120px',
                backgroundPositionX: 'center',
                // Size
                width: '60px',
                height: '60px',
        },
        avatarHello: {
                // Position
                position: 'fixed',
                right: 'calc(100% - 330px)',
                top: 'calc(100% - 85px)',
                // Layering
                zIndex: '10000',
                boxShadow: '0px 0px 50px RGBA(0,0,0,0.22)',
                // Border
                padding: '12px 12px 12px 16px',
                borderRadius: '24px',
                // Color
                backgroundColor: '#f9f0ff',
                color: 'black',
        },
        supportWindow: {
                // Position
                position: 'fixed',
                bottom: '100px',
                right: '52px',
                // Size
                width: '380px',
                height: '450px',
                maxWidth: 'calc(100% - 48px)',
                maxHeight: 'calc(100% - 48px)',
                backgroundColor: 'white',
                // Border
                borderRadius: '8px',
                overflow: 'hidden',
                // Shadow
                boxShadow: '0px 0px 50px RGBA(0,0,0,0.22)',
        },
        emailFormWindow: {
                width: '100%',
                overflow: 'hidden',
                transition: "all 0.5s ease",
                WebkitTransition: "all 0.5s ease",
                MozTransition: "all 0.5s ease",
        },
        stripe: {
                position: 'relative',
                top: '-45px',
                width: '100%',
                height: '308px',
                backgroundColor: '#2289FF',
                transform: 'skewY(-12deg)',
        },
        topText: {
                position: 'relative',
                width: '100%',
                top: '15%',
                color: 'white',
                fontSize: '24px',
                fontWeight: '600',
        },
        emailInput: {
                width: '75%',
                textAlign: 'center',
                outline: 'none',
                padding: '12px',
                borderRadius: '12px',
                border: '2px solid #193F63',
        },
        bottomText: {
                position: 'absolute',
                width: '100%',
                top: '60%',
                color: '#193F63',
                fontSize: '24px',
                fontWeight: '800'
        },
        loadingDiv: {
                position: 'absolute',
                height: '100%',
                width: '100%',
                textAlign: 'center',
                backgroundColor: 'white',
        },
        loadingIcon: {
                color: '#193F63',
                position: 'absolute',
                top: 'calc(50% - 51px)',
                right: 'calc(50% - 51px)',
                fontWeight: '600',
        },
        chatEngineWindow: {
                width: '100%',
                backgroundColor: '#fff',
        }
}