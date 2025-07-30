import streamlit as st
import pandas as pd

df = pd.read_excel('auxAR.xlsx')

st.title('Auxiliador de AR')

km_inicial = st.number_input('Km Inicial', step=0.1, format='%.3f')
km_final = st.number_input('Km Final', step=0.1, format='%.3f')
btn = st.button('Calcular')

if btn:
    filtro_km_inicial = df['KM'] >= km_inicial
    filtro_km_final = df['KM'] <= km_final
    df.loc[filtro_km_inicial & filtro_km_final, :]