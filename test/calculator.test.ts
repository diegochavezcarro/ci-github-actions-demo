import { describe, expect, it } from 'vitest';
import { multiply, sum } from '../src/calculator.js';

describe('calculator', () => {
  it('sums two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});
