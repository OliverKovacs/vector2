
// Oliver Kovacs 2019
// vector2.js

export default class Vector2 {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        return this;
    }



    fromArray(arr) {
        this.x = arr[0] || 0;
        this.y = arr[1] || 0;
        return this;
    }

    fromObject(obj) {
        this.x = obj.x || 0;
        this.y = obj.y || 0;
        return this;
    }

    fromPoints(x1, y1, x2, y2) {
        this.x = x2 - x1;
        this.y = y2 - y1;
        return this;
    }

    toArray() {
        return [ this.x, this.y ];
    }

    toObject() {
        return { x: this.x, y: this.y };
    }

    toString() {
        return `x: ${this.x}, y: ${this.y}`;
    }

    copy() {
        return new Vector2(this.x, this.y);
    }


    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    addX(vec) {
        this.x += vec.x;
        return this;
    }

    addY(vec) {
        this.y += vec.y;
        return this;
    }

    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    subtractX(vec) {
        this.x -= vec.x;
        return this;
    }

    subtractY(vec) {
        this.y -= vec.y;
        return this;
    }

    multiply(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }

    multiplyX(vec) {
        this.x *= vec.x;
        return this;
    }

    multiplyY(vec) {
        this.y *= vec.y;
        return this;
    }

    divide(vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    }

    divideX(vec) {
        this.x /= vec.x;
        return this;
    }

    divideY(vec) {
        this.y /= vec.y;
        return this;
    }

    bias(c) {
        this.x += c;
        this.y += c;
        return this;
    }

    biasX(c) {
        this.x += c;
        return this;
    }

    biasY(c) {
        this.y += c;
        return this;
    }

    scalar(c) {
        this.x *= c;
        this.y *= c;
        return this;
    }

    scalarX(c) {
        this.x *= c;
        return this;
    }

    scalarY(c) {
        this.y *= c;
        return this;
    }


    
    unit() {
        let length = this.length();
        this.x /= length;
        this.y /= length;
        return this;
    };
    
    norm() {
        this.unit();
        return this;
    };
    
    normalize() {
        this.unit();
        return this;
    };

    invert() {
        this.scalar(-1);
        return this;
    }

    invertX() {
        this.scalarX(-1);
        return this;
    }

    invertY() {
        this.scalarY(-1);
        return this;
    }

    sq() {
        this.x = Math.pow(this.x, 2);
        this.y = Math.pow(this.y, 2);
        return this;
    }

    sqX() {
        this.x = Math.pow(this.x, 2);
        return this;
    }

    sqY() {
        this.y = Math.pow(this.y, 2);
        return this;
    }

    sqrt() {
        this.x = Math.sqrt(this.x);
        this.y = Math.sqrt(this.y);
        return this;
    }

    sqrtX() {
        this.x = Math.sqrt(this.x);
        return this;
    }

    sqrtY() {
        this.y = Math.sqrt(this.y);
        return this;
    }
    
    limit(limit) {
        if (this.x > limit) {
            this.y *= (limit / this.x);
            this.x = limit;
        }
        if (this.y > limit) {
            this.x *= (limit / this.y);
            this.y = limit;
        }
        return this;
    };
    
    limitX(limit) {
        if (this.x > limit) {
            this.y *= (limit / this.x);
            this.x = limit;
        }
        return this;
    };
    
    limitY(limit) {
        if (this.y > limit) {
            this.x *= (limit / this.y);
            this.y = limit;
        }
        return this;
    };

    limitLength() {
        if (a.length() > limit) {
            let length = this.length()
            this.x *= (limit / length);
            this.y *= (limit / length);
        }
        return this;
    }
    
    round(p) {
        this.x = JSON.parse(this.x.toFixed(p));
        this.y = JSON.parse(this.y.toFixed(p));
        return this;
    };
    
    roundX(p) {
        this.x = JSON.parse(this.x.toFixed(p));
        return this;
    };
    
    roundY(p) {
        this.y = JSON.parse(this.y.toFixed(p));
        return this;
    };



    toAngle() {
        return Math.atan2(this.y, this.x);
    }

    toAngleDeg() {
        return Math.atan2(this.y, this.x) / Math.PI * 180;
    }

    fromAngle(angle, length) {
        this.x = Math.sin(angle) * (length || 1);
        this.y = Math.cos(angle) * (length || 1);
        return this;
    }

    fromAngleDeg(angle, length) {
        this.x = Math.sin(angle / 180 * Math.PI) * (length || 1);
        this.y = Math.cos(angle / 180 * Math.PI) * (length || 1);
        return this;
    }

    toPolar() {
        let angle = this.toAngle();
        this.x = this.length();
        this.y = angle;
        return this;
    }

    toCartesian() {
        let length = this.x;
        this.x = Math.sin(this.y) * length;
        this.y = Math.cos(this.y) * length;
        return this;
    }

    rotate(angle) {
        this.toPolar()
            .biasY(angle)
            .toCartesian();
        return this;
    }

    rotateDeg(angle) {
        this.toPolar()
            .biasY(angle / 180 * Math.PI)
            .toCartesian();
        return this;
    }

    rotateAround(vec, angle, length) {
        this.subtract(vec)
            .toPolar()
            .biasX(length)
            .biasY(angle)
            .toCartesian()
            .add(vec);
        return this;
    }

    rotateAroundDeg(vec, angle, length) {
        this.subtract(vec)
            .toPolar()
            .biasX(length)
            .biasY(angle / 180 * Math.PI)
            .toCartesian()
            .add(vec);
        return this;
    }

    length() {
        return Math.sqrt(this.lengthSq());
    }

    lengthSq() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }

    magnitude() {
        return this.length();
    }

    min() {
        return Math.min(this.x, this.y);
    }

    max() {
        return Math.max(this.x, this.y);
    }

    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    cross(vec) {
        return this.x * vec.y - this.y * vec.x;
    }

    distanceX(vec) {
        return vec.x - this.x;
    }

    distanceY(vec) {
        return vec.y - this.y;
    }

    distanceXAbs(vec) {
        return Math.abs(this.distanceX(vec));
    }

    distanceYAbs(vec) {
        return Math.abs(this.distanceY(vec));
    }
    
    angleToVector(vec) {
        return Math.acos(this.dot(vec) / (this.length() * vec.length()));
    };

    angleToVectorDeg(vec) {
        return Math.acos(this.dot(vec) / (this.length() * vec.length())) / Math.PI * 180;
    };
    
    orthogonal(b) {
        return this.dot(b) == 0;
    };

    equal(vec) {
        return this.x == vec.x && this.y == vec.y;
    };
    
    equalX(vec) {
        return this.x == vec.x;
    };
    
    equalY(vec) {
        return this.y == vec.y;
    };
}

//module.exports = Vector2;