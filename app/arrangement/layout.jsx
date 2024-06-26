import OptionGroup from "../components/OptionGroup";

const layout = ({ children }) => {
	return <>
		<section className="option-section">
			<section className="option-heading">
				<h2>ARRANGEMENT</h2>
				<ul className="option-group-list">
					{/* <OptionGroup groupHead={"SOLUTION DETAILS"}>
						this
					</OptionGroup> */}
				</ul>
			</section>
		</section>
		<section className="content-section">{children}</section>
	</>;
};
export default layout;
