import { useContext, useEffect } from 'react';
import Navbar from '../Navbar'
import { dataContext } from '../../context/dataContext';
import LoadingScreen from '../LoadingScreen';
import Modal from '../Modal';
import useLocalStorage from '../../hooks/useLocalStorage';
import AuthForm from '../AuthForm';



export default function Layout({children}: {children: React.ReactNode}) {
  const { loading, setModalOpen, setLoading} = useContext( dataContext );
  const { auth } = useLocalStorage();

  useEffect( () => {
    if( !loading ){
      console.log(auth);
      setModalOpen( !auth );
    }
    
  }, [loading] )

  useEffect( () => {
    if( !!auth ){
      setLoading( false )
    }


    
  }, [auth] )

  return (
    <>
        <Navbar/>
        { loading ? <LoadingScreen/> : undefined }
        <Modal>
          <AuthForm/>
        </Modal>
        <section className='mt-20 w-5/6 m-auto'>
            {children}
        </section>

    </>
  )
}
