import React from 'react';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

const Search = () => {
	// Контекст
	const { searchValue, setSearchValue } = React.useContext(SearchContext);

	const inputRef = React.useRef();

	const onClickClearFocus = () => {
		setSearchValue('');
	};

	console.log(inputRef);

	return (
		<div className={styles.root}>
			{/* Лупа */}
			<svg
				className={styles.searchIcon}
				enableBackground="new 0 0 32 32"
				id="Glyph"
				version="1.1"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
					id="XMLID_223_"
				/>
			</svg>

			<input
				ref={inputRef}
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				className={styles.input}
				placeholder="Поиск пиццы..."
			/>

			{/* Крестик */}
			{searchValue && (
				<svg
					onClick={() => onClickClearFocus()}
					className={styles.clearIcon}
					height="48"
					viewBox="0 0 48 48"
					width="48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
					<path d="M0 0h48v48H0z" fill="none" />
				</svg>
			)}
		</div>
	);
};

export default Search;