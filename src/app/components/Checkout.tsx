'use client'
 
import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Context } from "./ContextProvider";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import ParcelasModal from './Installments';


 
const App = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedParcelas, setSelectedParcelas] = useState(1);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSelectParcelas = (parcelas) => {
    setSelectedParcelas(parcelas);
    closeModal(); // close modal after installment selected
  };
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 250, marginRight: 500, marginLeft: 100 }}>
      <div style={{ flex: 1, marginRight: 10 }}>
      <h1 style={{ fontWeight: 'bold' }}>Dados do Pagador</h1>
      <Formik>
        <Form>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="emaildopagador"></label>
        <Field id="emaildopagador" name="emaildopagador" placeholder="Email do Pagador" 
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
        />
        </div>
        <div style={{ marginBottom: 10,marginTop: 30}} >
        <label htmlFor="cpf">CPF</label>
          <Field id="cpf" name="cpf"/>
        </div>
        <div style={{ marginBottom: 10,marginTop: 28}} >
        <label htmlFor="numerodeidentificacao"></label>
          <Field id="numerodeidentificacao" name="numerodeidentificacao" placeholder="Numero de identificação" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
        </div>
        </Form>
    </Formik>
    </div>
    <div style={{ flex: 1 }}>
    <h1 style={{ fontWeight: 'bold' }}>Dados do Pagamento</h1>
    <Formik>
        <Form>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="valordopagamento"></label>
        <Field id="valordopagamento" name="valordopagamento" placeholder="Valor do pagamento" 
        style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
        />
        </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
        <label htmlFor="numerodocartao"></label>
          <Field id="numerodocartao" name="numerodocartao" placeholder="Numero do cartão" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="nomedotitular"></label>
          <Field id="nomedotitular" name="nomedotitular" placeholder="Nome do titular" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="mesdexpiracao"></label>
          <Field id="mesdexpiracao" name="mesdexpiracao" placeholder="Mês de expiração(MM)" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="anodexpiracao"></label>
          <Field id="anodexpiracao" name="anodexpiracao" placeholder="Ano de expiração(YYYY)" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
        <div style={{ marginBottom: 10, marginTop: 20 }}>
          <label htmlFor="cvv"></label>
          <Field id="cvv" name="cvv" placeholder="CVV" 
          style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '8px', width: '100%'}}
          />
          </div>
          <button style={{ flex: 1, marginBottom: 10, marginTop: 20 }}
            type="submit">Selecione o numero de parcelas
          </button>
        <ParcelasModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          onSubmit={handleSelectParcelas}
        />
        </Form>
      </Formik>
    <div style={{ marginTop: 20, textAlign: 'center'}}>
      <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none',borderRadius: '4px', fontsize: '16px', width: '100%'}}>PAGAR</button>
       </div>
    </div>
    </div>
  );
};
//style={{ marginTop: 20, textAlign: 'center' }}
export default App;
