# Personal Website

This is a personal website project built using Jekyll and the Minimal Mistakes theme. The website is hosted on GitHub Pages and utilizes the remote theme method for easy updates and maintenance.

## Project Structure

The project has the following structure:

```
personal-website
├── _config.yml          # Configuration settings for the Jekyll site
├── _posts               # Directory for blog posts
│   └── 2023-01-01-welcome-to-my-website.md  # A welcome blog post
├── _data                # Directory for data files
│   └── navigation.yml    # Navigation data for the website
├── assets               # Directory for assets
│   ├── css              # Custom CSS styles
│   │   └── custom.css   # Custom stylesheet
│   └── js               # Custom JavaScript files
│       └── custom.js    # Custom script
├── .gitignore           # Files and directories to ignore by Git
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using:
   ```
   git clone https://github.com/<username>/personal-website.git
   ```

2. **Navigate to the Project Directory**:
   ```
   cd personal-website
   ```

3. **Install Jekyll**:
   Make sure you have Ruby and Bundler installed. Then, install Jekyll:
   ```
   gem install jekyll bundler
   ```

4. **Install Dependencies**:
   Run the following command to install the required gems:
   ```
   bundle install
   ```

5. **Run the Jekyll Server**:
   Start the Jekyll server to preview your site:
   ```
   bundle exec jekyll serve
   ```

6. **Access Your Site**:
   Open your browser and go to `http://localhost:4000` to see your personal website in action.

## Usage

You can add new blog posts by creating markdown files in the `_posts` directory. Each post should follow the naming convention `YYYY-MM-DD-title.md` and include front matter metadata.

Feel free to customize the styles in `assets/css/custom.css` and add any custom scripts in `assets/js/custom.js`.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.