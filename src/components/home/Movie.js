import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../../actions/searchAction";

export class Movie extends Component {
	componentDidMount() {
		this.props.fetchMovie(this.props.match.params.id);
		this.props.setLoading();
	}
	render() {
		const na =
			"https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg";
		const { loading, movie } = this.props;
		if (movie) {
			let movieInfo = (
				<div className="container">
					<div className="row">
						<div className="col-md-4 card card-body">
							<img
								src={movie.Poster === "N/A" ? na : movie.Poster}
								className="thumbnail"
								alt="Poster"
							/>
						</div>
						<div className="col-md-8">
							<h2 className="mb-4">{movie.Title}</h2>
							<ul className="list-group">
								<li className="list-group-item">
									<strong>Genre:</strong> {movie.Genre}
								</li>
								<li className="list-group-item">
									<strong>Released:</strong> {movie.Released}
								</li>
								<li className="list-group-item">
									<strong>Rated:</strong> {movie.Rated}
								</li>
								<li className="list-group-item">
									<strong>IMDB Rating:</strong> {movie.imdbRating}
								</li>
								<li className="list-group-item">
									<strong>Director:</strong> {movie.Director}
								</li>
								<li className="list-group-item">
									<strong>Writer:</strong> {movie.Writer}
								</li>
								<li className="list-group-item">
									<strong>Actors:</strong> {movie.Actors}
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="card card-body bg-dark my-5 text-light">
							<div className="col-md-12">
								<h3>About </h3>
								{movie.Plot}
								<hr />
								<a
									href={"https://www.imdb.com/title/" + movie.imdbID}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary"
								>
									View on IMDB
								</a>
								<Link to="/" className="btn btn-default text-light">
									Go Back To Search
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
			let content = loading ? <Spinner /> : movieInfo;
			return <div>{content}</div>;
		} else {
			return (
				<div>
					<Spinner />
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	loading: state.searchMovie.loading,
	movie: state.searchMovie.movie
});

const mapDispatchToProps = { fetchMovie, setLoading };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
