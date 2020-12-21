import React from 'react';

const ContactInformation:React.FunctionComponent = () => {
  return (
    <section className="mt-2 p-2">
      <div>
        <h5 className="information-title text-center p-2 font-weight-bold">Adresse</h5>
        <p className="information-text">197 avenue Pierre Mendès</p>
        <p className="information-text">13008, Marseille</p>
      </div>
      <div>
        <h5 className="information-title text-center p-2 font-weight-bold">Contact direct</h5>
        <p className="information-text"><span className="font-weight-bold">Téléphone:</span> 07 84 94 53 55</p>
        <p className="information-text"><span className="font-weight-bold">Email:</span> bastien.ratat@gmail.com</p>
      </div>
      
    </section>
  )
}

export default ContactInformation