export default function ContactCard(props) {
  return (
    <div className="contactCard text-center p-6 rounded-xl abttxtP shadow">
            <div className="contactCardWrapper">
        <div className="contactCardIcon w-fit mx-auto navLogo text-3xl mb-2">{props.contactIcon}</div>
                <div className="contactCardTag font-medium text-lg text-white">{props.contactTag}</div>
                <div className="contactCardDesc t">{props.contactDesc}</div>
            </div>
      </div>
  )
}
