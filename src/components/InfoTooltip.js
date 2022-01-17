import Popup from "./Popup"
import successIcon from "../images/tooltip/success.svg"
import failIcon from "../images/tooltip/fail.svg"

const InfoTooltip = ({ isOpen, onClose, isSuccess }) => {
  
  return (
      <Popup
          isOpen={ isOpen }
          name="tooltip"
          onClose={ onClose }
      >
        <div className="tooltip">
          {
            isSuccess
            ?
            (<>
              <img
                  src={successIcon}
                  alt=""
                  className="tooltip__icon"
              />
              <h2 className="tooltip__message">
                Вы успешно зарегистрировались!
              </h2>
            </>)
            :
            (<>
              <img
                  src={failIcon}
                  alt=""
                  className="tooltip__icon"
              />
              <h2 className="tooltip__message">
                Что-то пошло не так!
                Попробуйте ещё раз.
              </h2>
            </>)
          }
        </div>
      </Popup>
  )
}

export default InfoTooltip
