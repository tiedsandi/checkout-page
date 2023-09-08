import React, { useContext } from 'react';
import { Heading2 } from '../../Styled';
import { FormContext } from '../../contexts/FormContext';
import { Footer, Header, PurchaseItems, SubmitButton, TextItem, TextTotal, Wrapper } from './styles';

const Summary = () => {
	const { isDropshipper } = useContext(FormContext);

	return (
		<Wrapper>
			<Header>
				<Heading2>Summary</Heading2>
				<PurchaseItems>10 items purchased</PurchaseItems>
			</Header>
			<Footer>
				<TextItem>
					Cost of Goods <span>500,000</span>
				</TextItem>
				{isDropshipper && (
					<TextItem>
						Dropshipping Fee <span>5,900</span>
					</TextItem>
				)}

				<TextTotal>
					Total<span>505,900</span>
				</TextTotal>

				<SubmitButton type="submit" value={'Continue to Payment'} />
			</Footer>
		</Wrapper>
	);
};

export default Summary;
