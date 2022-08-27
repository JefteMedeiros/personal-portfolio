import { useContext } from 'react';
import { ClickedUser } from '../../../context';
import { Bill } from '../Bill';
import { Elon } from '../Elon';
import { Sundar } from '../Sundar';
import { Tim } from '../Tim';

export function Testimonial() {
  const { clickedUser } = useContext(ClickedUser);

  return (
    <>
      <Sundar visibility={clickedUser === 0 ? 'visible' : 'hidden'} />
      <Elon visibility={clickedUser === 1 ? 'visible' : 'hidden'} />
      <Tim visibility={clickedUser === 2 ? 'visible' : 'hidden'} />
      <Bill visibility={clickedUser === 3 ? 'visible' : 'hidden'} />
    </>
  );
}
