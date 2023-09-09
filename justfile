CC := "bun"

ARGS := ""

default: fmt
	{{CC}} run build

dep:
    {{CC}} install

dev:
    {{CC}} --bun run dev

fmt:
	{{CC}} run format; {{CC}} run lint

check:
	{{CC}} run check

clean:
	{{CC}} clean
