import React from 'react';
import { getYear } from 'date-fns';
import { fireEvent, getAllByText, render } from '@testing-library/react';
import { parseISO, startOfDay, endOfDay } from 'date-fns';

import { RangePicker } from './range-picker';

describe('RangePicker Component', () => {
  describe('Default', () => {
    test('render open RangerPicker', () => {
      const { getByTestId } = render(<RangePicker onChange={() => {}} />);
      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);
      const rangerPickerContainer = getByTestId('ranger-content');
      expect(rangerPickerContainer).toBeVisible();
    });

    test('should close when the user clicks escape', () => {
      const { getByTestId } = render(<RangePicker onChange={() => {}} />);
      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);
      const rangerPickerContainer = getByTestId('ranger-content');

      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
      expect(rangerPickerContainer).not.toBeVisible();
    });
  });

  describe('Range Type', () => {
    test('should select a start and finish date', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const rangerPickerContainer = getByTestId('ranger-content');
      const containerInitialDate = getAllByText(rangerPickerContainer, '1')[0];
      fireEvent.click(containerInitialDate);

      const containerEndDate = getAllByText(rangerPickerContainer, '15')[0];
      fireEvent.click(containerEndDate);

      const applyButton = getByTestId('ranger-apply');
      fireEvent.click(applyButton);

      const current = new Date();
      const startDate = new Date(getYear(current), current.getMonth(), 1);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(getYear(current), current.getMonth(), 15);
      endDate.setHours(23, 59, 59, 999);

      expect(handleChange).toHaveBeenCalledWith({
        from: startDate,
        to: endDate,
        type: 'custom'
      });
    });

    test('should select a correct today period', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const today = getByTestId('range-today');
      fireEvent.click(today);

      const applyButton = getByTestId('ranger-apply');
      fireEvent.click(applyButton);

      const todayDate = new Date();
      const startOfDay = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
      endOfDay.setHours(23, 59, 59, 999);

      expect(handleChange).toHaveBeenCalledWith({
        from: startOfDay,
        to: endOfDay,
        type: 'today'
      });
    });

    test('should select a correct yesterday period', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const yesterday = getByTestId('range-yesterday');
      fireEvent.click(yesterday);

      const applyButton = getByTestId('ranger-apply');
      fireEvent.click(applyButton);

      const todayDate = new Date();
      const yesterdayDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate() - 1);

      const startOfDay = new Date(yesterdayDate.getFullYear(), yesterdayDate.getMonth(), yesterdayDate.getDate());
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(yesterdayDate.getFullYear(), yesterdayDate.getMonth(), yesterdayDate.getDate());
      endOfDay.setHours(23, 59, 59, 999);

      expect(handleChange).toHaveBeenCalledWith({
        from: startOfDay,
        to: endOfDay,
        type: 'yesterday'
      });
    });

    test('should select a correct this month period', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const thisMonth = getByTestId('range-this-month');
      fireEvent.click(thisMonth);

      const applyButton = getByTestId('ranger-apply');
      fireEvent.click(applyButton);

      const todayDate = new Date();

      const startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
      endDate.setHours(23, 59, 59, 999);

      expect(handleChange).toHaveBeenCalledWith({
        from: startDate,
        to: endDate,
        type: 'this-month'
      });
    });

    test('should select a correct this year period', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const thisYear = getByTestId('range-this-year');
      fireEvent.click(thisYear);

      const applyButton = getByTestId('ranger-apply');
      fireEvent.click(applyButton);

      const todayDate = new Date();
      const startDate = new Date(todayDate.getFullYear(), 0, 1);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());
      endDate.setHours(23, 59, 59, 999);

      expect(handleChange).toHaveBeenCalledWith({
        from: startDate,
        to: endDate,
        type: 'this-year'
      });
    });

    test('should select the date in the input field', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const initialDateInput = getByTestId('initial-date');
      const endDateInput = getByTestId('end-date');

      fireEvent.focus(initialDateInput);
      fireEvent.change(initialDateInput, { target: { value: '' } });

      fireEvent.change(initialDateInput, { target: { value: '2022/08/01' } });
      fireEvent.blur(initialDateInput);

      fireEvent.focus(endDateInput);
      fireEvent.change(endDateInput, { target: { value: '' } });
      fireEvent.change(endDateInput, { target: { value: '2022/08/15' } });

      fireEvent.blur(endDateInput);

      const applyButton = getByTestId('ranger-apply');
      fireEvent.click(applyButton);

      const expectedFromDate = startOfDay(parseISO('2022-08-01'));
      const expectedToDate = endOfDay(parseISO('2022-08-15'));

      expect(handleChange).toHaveBeenCalledWith({
        from: expectedFromDate,
        to: expectedToDate,
        type: 'custom'
      });
    });
  });

  describe('Single Type', () => {
    test('render open RangerPicker', () => {
      const { getByTestId } = render(<RangePicker onChange={() => {}} type="single" />);
      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);
      const rangerPickerContainer = getByTestId('ranger-content');
      expect(rangerPickerContainer).toBeVisible();
    });

    test('should close when the user clicks escape', () => {
      const { getByTestId } = render(<RangePicker onChange={() => {}} type="single" />);
      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);
      const rangerPickerContainer = getByTestId('ranger-content');

      fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
      expect(rangerPickerContainer).not.toBeVisible();
    });

    test('should select a date', async () => {
      const handleChange = jest.fn();
      const { getByTestId } = render(<RangePicker onChange={handleChange} type="single" />);

      const rangerPickerTrigger = getByTestId('ranger-trigger');
      fireEvent.click(rangerPickerTrigger);

      const rangerPickerContainer = getByTestId('ranger-content');
      const containerDate = getAllByText(rangerPickerContainer, '20')[0];
      fireEvent.click(containerDate);

      const current = new Date();
      const selectedDate = new Date(getYear(current), current.getMonth(), 20);

      expect(handleChange).toHaveBeenCalled();
      expect(handleChange).toHaveBeenCalledWith(selectedDate);
    });
  });
});
