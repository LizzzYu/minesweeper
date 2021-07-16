import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import clock from '../assets/clock.png';
import restartIcon from '../assets/restart.png';
import empty from '../assets/empty.png';
import open1 from '../assets/open1.png';
import open2 from '../assets/open2.png';
import open3 from '../assets/open3.png';
import open4 from '../assets/open4.png';
import open5 from '../assets/open5.png';
import open6 from '../assets/open6.png';
import open7 from '../assets/open7.png';
import open8 from '../assets/open8.png';
import flag from '../assets/flag.png';
import mine from '../assets/mine-ceil.png';
import mineDeath from '../assets/mine-death.png';
import misFlagged from '../assets/misflagged.png';
import question from '../assets/question.png';
import checked from '../assets/checked.png';

function MineSweeperView({
  ceils,
  className,
  changeCeilState,
  onReset,
  openCeil,
  openCeils,
  mines,
  status,
  seconds,
  // onClose,
  difficulty,
  openingCeil,
  openingCeils,
  sameTouchPos,
  lastTouch,
}) {
  const restart = useRef(null);
  const dropDown = useRef(null);
  const topBar = useRef(null);
  const [openOption, setOpenOption] = useState(null);
  const [openBehavior, setOpenBehavior] = useState({ index: -1, behavior: '' });

  function remainMines() {
    return (
      mines -
      ceils.filter(ceil => ceil.state === 'flag' || ceil.state === 'misflagged')
        .length
    );
  }
  
  function onMouseDownContent(e) {
    if (e.button !== 0) return;
    if (
      restart.current.contains(e.target) ||
      status === 'won' ||
      status === 'died'
    )
      return;
  }

  useEffect(() => {
    const { index, behavior } = openBehavior;
    switch (behavior) {
      case 'single':
        return openingCeil(index);
      case 'multi':
        return openingCeils(index);
      default:
        openingCeil(-1);
    }
  }, [openBehavior.index, openBehavior.behavior, openBehavior, openingCeil, openingCeils]);

  function onMouseDownCeils(e, index) {
    if (e.button === 2 && e.buttons === 2 && index !== -1) {
      changeCeilState(index);
    } else if (e.button === 0 && e.buttons === 1) {
      setOpenBehavior({
        index,
        behavior: 'single',
      });
    } else if (e.buttons === 3) {
      setOpenBehavior({
        index,
        behavior: 'multi',
      });
    }
  }

  function onMouseOverCeils(index) {
    setOpenBehavior({
      index,
      behavior: openBehavior.behavior,
    });
  }

  function onMouseUpCeils() {
    const { behavior, index } = openBehavior;
    if (index === -1) return;
    if (behavior === 'single') {
      openCeil(index);
    } else if (behavior === 'multi') {
      openCeils(index);
    }
  }

  function hoverOption(option) {
    if (openOption) setOpenOption(option);
  }
  function onMouseUp(e) {
    setOpenBehavior({ index: -1, behavior: '' });
    
    if (!dropDown.current.contains(e.target)) setOpenOption('');
  }

  function onTouchEndDropdown(e) {
    if (
      !dropDown.current.contains(e.target) &&
      !topBar.current.contains(e.target)
    )
      setOpenOption('');
  }
  function onTouchEndCeils(e) {
    const index = Array.prototype.indexOf.call(
      e.currentTarget.children,
      e.target.closest('.mine__ceil'),
    );
    if (index === -1 || !sameTouchPos) return;
    if (new Date() - lastTouch < 150) {
      if (ceils[index].state === 'open') {
        openCeils(index);
      } else {
        openCeil(index);
      }
    } else {
      changeCeilState(index);
    }
  }
  useEffect(() => {
    window.addEventListener('touchend', onTouchEndDropdown);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onTouchEndDropdown);
    };
  }, []);
  return (
    <div className={className} onContextMenu={e => e.preventDefault()}>
      <div className="mine__drop-downs" ref={dropDown}>
        <div
          style={{ visibility: openOption === 'Game' ? 'visible' : 'hidden' }}
          className="mine__drop-down">
          <div className="mine__drop-down__title">Game</div>
          <div className="mine__drop-down__menu">
            <div className="mine__drop-down__row"
              onMouseUp={() => {
                onReset();
                setOpenOption('');
                }}>
              <div className="mine__drop-down__check" />
              <span>New</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />
            <div
              className="mine__drop-down__row"
              onMouseUp={() => {
                onReset('Beginner');
                setOpenOption('');
              }}
              onTouchStart={() => onReset('Beginner')}
            >
              <div className="mine__drop-down__check">
                {difficulty === 'Beginner' && (
                  <img src={checked} alt="checked" />
                )}
              </div>
              <span>Beginner</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div
              className="mine__drop-down__row"
              onMouseUp={() => {
                onReset('Intermediate');
                setOpenOption('');
              }}
              onTouchStart={() => onReset('Intermediate')}
            >
              <div className="mine__drop-down__check">
                {difficulty === 'Intermediate' && (
                  <img src={checked} alt="checked" />
                )}
              </div>
              <span>Intermediate</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div
              className="mine__drop-down__row"
              onMouseUp={() => {
                onReset('Expert');
                setOpenOption('');
              }}
              onTouchStart={() => onReset('Expert')}
            >
              <div className="mine__drop-down__check">
                {difficulty === 'Expert' && <img src={checked} alt="checked" />}
              </div>
              <span>Expert</span>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
            <div className="mine__drop-down__separator" />
            <div className="mine__drop-down__row">
              <div className="mine__drop-down__check" />
              <a
                className="mine__drop-down__text"
                href="https://github.com/LizzzYu/minesweeper/"
              >
                Github
              </a>
              <span className="mine__drop-down__hot-key" />
              <div className="mine__drop-down__arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="mine__top-bar" ref={topBar}>
        <div
          onMouseDown={() => setOpenOption('Game')}
          onTouchStart={() => setOpenOption(openOption ? '' : 'Game')}
          onMouseOver={() => hoverOption('Game')}
          className="mine__top-bar__text"
        >
          Game
        </div>
      </div>
      <section className="mine__content" onMouseDown={onMouseDownContent}>
        <div className="mine__score-bar">
          <div className="mine__digits__outer">
            <img alt="flag" src={flag} />
            {remainMines()}
          </div>
          <div className="mine__digits__outer" style={{ justifySelf: 'center' }}>
            <img width="14px" height="14px" alt="clock" src={clock} />
            {seconds}
          </div>
          <div className="mine__restart__wrapper">
            <button className="mine__restart" ref={restart} onClick={() => onReset()}>
              <img alt="restart" src={restartIcon} />
            </button>
          </div>
        </div>
        <div
          className="mine__content__inner"
          onTouchEnd={onTouchEndCeils}
          onMouseUp={onMouseUpCeils}
        >
          <Ceils
            ceils={ceils}
            onMouseDown={onMouseDownCeils}
            onMouseEnter={onMouseOverCeils}
          />
        </div>
      </section>
    </div>
  );
}
function getTextImg(index) {
  return [empty, open1, open2, open3, open4, open5, open6, open7, open8][index];
}
function Ceils({ ceils, onMouseDown, onMouseEnter }) {
  function renderContent(ceil, index) {
    const { state, minesAround, opening } = ceil;
    switch (state) {
      case 'open':
        return <MinesAround mines={minesAround} />;
      case 'flag':
        return <Flag />;
      case 'misflagged':
        return <MisFlagged />;
      case 'mine':
        return <Mine />;
      case 'die':
        return <Die />;
      case 'unknown':
        return opening ? <QuestionOpen /> : <Question />;
      default:
        return opening ? <CeilBackgroundOpen index={index} /> : <CeilBackgroundCover index={index} />;
    }
  }

  return ceils.map((ceil, index) => (
    <div
      key={index}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseDown={e => onMouseDown(e, index)}
      className="mine__ceil"
      index={index}
    >
      {renderContent(ceil, index)}
    </div>
  ));
}

const Die = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="death" src={mineDeath} />
  </>
);
const MisFlagged = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="misFlagged" src={misFlagged} />
  </>
);
const Flag = () => (
  <>
    <CeilBackgroundCover />
    <img alt="flag" src={flag} />
  </>
);
const MinesAround = ({ mines }) => (
  <>
    <CeilBackgroundOpen />
    <img alt="mines-around" src={getTextImg(mines)} />
  </>
);
const Question = () => (
  <>
    <CeilBackgroundCover />
    <img alt="question" src={question} />
  </>
);
const QuestionOpen = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="question" src={question} />
  </>
);
const Mine = () => (
  <>
    <CeilBackgroundOpen />
    <img alt="mine" src={mine} />
  </>
);

const CeilBackgroundCover = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #E8F7EE;
  border-left: #fff solid 2px;
  border-top: #fff solid 2px;
  border-right: #B8C4BB solid 2px;
  border-bottom: #B8C4BB solid 2px;
`;

const CeilBackgroundOpen = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: #fad13f solid 1px;
  border-top: #fad13f solid 1px;
  background-color: #FCE38A
`;

export default styled(MineSweeperView)`
  display: inline-block;
  img {
    pointer-events: none;
  }
  .mine__drop-downs {
    position: absolute;
    display: flex;
    height: 20px;
  }
  .mine__drop-down {
    position: relative;
    z-index: 1;
  }
  .mine__drop-down__title {
    padding: 0 5px;
    height: 100%;
    line-height: 20px;
    font-size: 11px;
    color: white;
    background-color: #663f46;
  }
  .mine__drop-down__menu {
    background-color: white;
    position: absolute;
    box-shadow: 2px 2px 5px rgb(100, 100, 100);
    padding: 5px;
    display: grid;
    grid-template-columns: 18px auto auto 15px;
    line-height: 18px;
    font-size: 11px;
  }
  .mine__drop-down__row {
    display: contents;
    &:hover > * {
      background: #3f665f;
      filter: invert(100%);
    }
  }
  .mine__drop-down__separator {
    grid-column: 1 / 5;
    height: 1px;
    background-color: gray;
    margin: 3px 1px;
  }
  .mine__drop-down__check {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mine__drop-down__arrow {
  }
  .mine__drop-down__hot-key {
    padding-left: 5px;
  }
  .mine__drop-down__text {
    white-space: nowrap;
  }
  .mine__top-bar {
    position: relative;
    display: flex;
    height: 20px;
    background-color: #e8e5df;
  }
  .mine__top-bar__text {
    padding: 0 5px;
    height: 100%;
    line-height: 20px;
    font-size: 11px;
    &:hover {
      color: ${({ platform }) => (platform === 'desktop' ? '#FFF' : '#000')};
      background-color: ${({ platform }) =>
        platform === 'desktop' ? '#663f46' : 'transparent'};
    }
  }
  .mine__content {
    background-color: rgb(192, 192, 192);
  }
  .mine__score-bar {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    align-items: center;
    justify-content: center;

    height: 34px;
    background-color: #4e505f;
    padding: 3px 4px;
  }
  .mine__digits__outer {
    font-size: 12px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40px;
    height: 24px;
  }
  .mine__restart__wrapper {
    display: grid;
    justify-content: flex-end;
  }
  .mine__restart {
    background-color: transparent;
    color: transparent;
    outline: none;
    border: none;

    display: flex;
    align-items: center;
    
    :active {
      img {
        transform: scale(0.8) rotate(180deg);
      }
    } 
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({ columns }) => columns}, 16px);
    grid-template-rows: repeat(${({ rows }) => rows}, 16px);
    border: 3px solid #4e505f;
  }
  .mine__ceil {
    position: relative;
    img {
      position: absolute;
      width: 16px;
      height: 16px;
    }
  }
`;
