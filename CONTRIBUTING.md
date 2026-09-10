# Contributing to NRT Gabon Aviation Platform

Thank you for contributing to NRT Gabon! We welcome contributions to improve our regional aviation platform, animation fidelity, booking logic, and destination data.

## Development Workflow

1. **Fork or Clone the Repository**:
   ```bash
   git clone https://github.com/AitHFifi/NRT.git
   cd NRT
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Commit Conventions**:
   We follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` New features
   - `fix:` Bug fixes
   - `docs:` Documentation changes
   - `style:` Formatting or UI styling
   - `refactor:` Code restructuring
   - `perf:` Performance optimizations
   - `test:` Unit or integration tests
   - `chore:` Tooling, dependencies, build configs

5. **Lint and Validate**:
   ```bash
   pnpm lint
   pnpm build
   ```

6. **Submit a Pull Request**:
   Push your branch and open a PR against `main`. Ensure all CI checks pass.
