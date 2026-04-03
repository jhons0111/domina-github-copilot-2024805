import { render, screen, fireEvent } from '@testing-library/react';
import Destino from './Destino';
import { describe, it, expect } from 'vitest';

describe('Destino Component', () => {
    const mockDestino = {
        imagen: 'test-image.jpg',
        nombre: 'Test Destino',
        descripcion: 'Test description'
    };

    it('adds "destacado" class when clicked', () => {
        render(<Destino destino={mockDestino} />);
        
        const destinoDiv = screen.getByRole('button');
        
        // Initial state: should not have 'destacado' class
        expect(destinoDiv).toHaveClass('col-md-4 mb-3');
        expect(destinoDiv).not.toHaveClass('destacado');
        
        // Click the div
        fireEvent.click(destinoDiv);
        
        // After click: should have 'destacado' class
        expect(destinoDiv).toHaveClass('col-md-4 mb-3 destacado');
    });
});