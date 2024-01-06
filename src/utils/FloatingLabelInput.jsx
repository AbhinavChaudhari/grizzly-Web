import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { cross } from '../assets';

const FloatingLabelInput = ({ label, id }) => {
	const [isFocused, setFocused] = useState(false);
	const [email, setEmail] = useState("");

	const labelAnimation = useSpring({
		transform: isFocused ? 'translateY(-110%) scale(0.8)' : 'translateY(0%) scale(1)',
		fontSize: isFocused ? '0.75rem' : '1rem',
		color: isFocused ? '#11B2A8' : '#a0aec0',

	});

	return (
		<div className="relative">
			<input
				type="text"
				id={id}
				name={id}
				value={email}
				className="w-full lg:w-[22.5rem] block  p-4 border border-gray-300 rounded-md focus:outline-secondary focus:border-secondary transition-all duration-1000 origin-0"
				onChange={(e) => { setEmail(e.target.value) }}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
			/>

			{email != "" && <img src={cross} className='absolute bottom-1/4 right-0' onClick={() => setEmail("")} />}


			{email == "" && <animated.label
				htmlFor={id}
				className="absolute left-3 bottom-1/4 transition-all duration-100 origin-0"
				style={labelAnimation}
			>
				{label}
			</animated.label>}



		</div>
	);
};

export default FloatingLabelInput;
