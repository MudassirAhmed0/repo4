 
import styles from '../../styles/Chalja.module.css';

const CardContent = ({children,noPadding }) => { 
  return (
    <div className={`pt-6 pb-10  ${noPadding || styles.shipmentContent}`}>
        {children}
    </div>
  )
}

export default CardContent