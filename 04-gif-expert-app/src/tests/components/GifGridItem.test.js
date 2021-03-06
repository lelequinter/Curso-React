import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe( 'Pruebas en GifGridItem', () => {

    const title = 'batman loco'
    const url = 'https://algo.jpg'

    const wrapper = shallow(<GifGridItem title = { title } url = { url }/>);

    test('Debe de mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });
    
    test('Debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        //console.log( img.prop('src'));
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });
    
test('Div debe tener la clase animate__fadeIn', () => {
  const div = wrapper.find('div');
  //console.log( div.prop('className') );
  const className = div.prop('className')

  expect( className.includes('animate__fadeIn')).toBe( true );
});


} )